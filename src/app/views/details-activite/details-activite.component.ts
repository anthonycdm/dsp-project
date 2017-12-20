import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Activites, Reservation, Commentaires } from '../../models/index';
import * as myGlobals from '../../globals/index';
import { ActivitesService,AuthService,ReservationService,CommentairesService } from '../../services/index';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-activite',
  templateUrl: './details-activite.component.html',
  styleUrls: ['./details-activite.component.css']
})
export class DetailsActiviteComponent implements OnInit {
 /* id ="";
  stringIsNumber(s) {
    var x = +s; // made cast obvious for demonstration
    return x.toString() === s;
 }*/
  myActivity : any =[];

  //rsv :any ={};
  err='';
  currency = myGlobals.CURRENCY.euro;
  form: FormGroup;
  commentform: FormGroup;
  prix : number;

  isLoggedIn = this.auth.isLoggedIn();
  id_activite = this.route.snapshot.paramMap.get('id');
  rsv : Reservation = {

      //id_cli : myGlobals.CURRENT_CLIENT._id,
      id_cli :"",
      id_act : this.id_activite,
      heure_in  : "",
      heure_out  : "",
      date_rsv : null,
      _id :null
  };
  comment : Commentaires = {
    type: null,
    texte : null,
    date : null,
    id_act : null,
    id_client : null,
    visible: true,
    _id: null
  };
  constructor(private route : ActivatedRoute,
              private router : Router,
              private activite : ActivitesService,
              private commentaire : CommentairesService,
              private reservation : ReservationService,
              private auth : AuthService, 
              private fb: FormBuilder) { 


    this.commentform = this.fb.group({
      
        commentTexte:  ['',[Validators.required, Validators.minLength(3)]]

     });
     this.form = this.fb.group({
        //heure_in: this.fb.group({
                //start_hour: ['',[Validators.required, Validators.minLength(3)]],
                //start_min: ['',[Validators.required, Validators.minLength(3)]]
                

       // }),
        date: this.fb.group({

          mydate : ['',[Validators.required, Validators.minLength(3)]]

        })
    });
  
  }

   
  getActivite(){
		 this.activite.getActivite(this.id_activite)
                  .subscribe(data => {this.myActivity=data ;
                    console.log(this.myActivity);
                    this.prix = this.activite.getPrice (this.myActivity.prix, this.myActivity.remise);
                  });

  }


  createReservation(){

     this.reservation.createReservation(this.rsv).subscribe(data => {
         console.log(data);

     });
    
  }
  onSubmit(){
   let   annee      = this.form.get('date').get('mydate').value.year,
         mois       = this.form.get('date').get('mydate').value.month,
         jour       = this.form.get('date').get('mydate').value.day,
         date       = `${annee},${mois},${jour}`;

    console.log(date);
    this.rsv.date_rsv =new Date(date);
    this.createReservation();

  }
  createComment() {

   
	  
	  if(this.isLoggedIn){
		  
      let commentTexte = this.commentform.get('commentTexte').value;
      if (commentTexte !== null && commentTexte !== '') {
        this.comment.id_client = myGlobals.CURRENT_CLIENT._id;
        this.comment.id_act = this.id_activite;
        this.comment.date = new Date(Date.now());
        this.comment.texte = commentTexte;
        this.comment.type ="";

        this.commentaire.createCommentaire(this.comment).subscribe(data => {
           console.log(data);

       });
      } else {

        alert('Votre commentaire est vide');
      }
		  //this.err='';

      
	  }
	  //return this.err;
	  
  }
  errComment(){

   
    
    if(!this.isLoggedIn){
      console.log('not connected');
      this.err=myGlobals.ERROR_FORM.commentaire.nologgedIn.message;
      
    } else {
      
     
      console.log('connected');
      this.err='';
      
    }    
  
  }
  ngOnInit() {

    this.getActivite();
    this.errComment();

    }

}
