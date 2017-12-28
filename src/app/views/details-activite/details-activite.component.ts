import { Component, OnInit, ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Activites, Reservation, Commentaires, Photo, Session } from '../../models/index';
import * as myGlobals from '../../globals/index';
import { ActivitesService,AuthService,ReservationService,CommentairesService,PhotosService,SessionsService } from '../../services/index';
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
  imageform: FormGroup;
  prix : number;
  myimg: any;
  formData: FormData;
  isLoggedIn = this.auth.isLoggedIn();
  session  =  myGlobals.CURRENT_SESSION._id || null;
  id_activite = this.route.snapshot.paramMap.get('id');
  rsv : Reservation = {

      //id_cli : myGlobals.CURRENT_CLIENT._id,
      id_cli :"",
      id_act : this.id_activite,
      heure_in  : "",
      heure_out  : "",
      date_rsv : null,
      _id :null,
      statut:'non-reserve',
      session: this.session
  };
  comment : Commentaires = {
    type: null,
    texte : null,
    date : null,
    id_act : null,
    id_client : null,
    visible: false,
    _id: null
  };
  imgphoto = {
     
    id_activite : null,
    id_cli : null,
    nom_img : null,
   // visible: true,
    _id: null

  };
  /*imgphoto : Photo = {
   
    id_activite : null,
    id_cli : null,
    nom_img : null,
   // visible: true,
    _id: null
  };*/
  constructor(private route : ActivatedRoute,
              private router : Router,
              private sess : SessionsService,
              private elem : ElementRef,
              private activite : ActivitesService,
              private location : Location,
              private photo : PhotosService,
              private commentaire : CommentairesService,
              private reservation : ReservationService,
              private auth : AuthService, 
              private fb: FormBuilder) { 


    this.commentform = this.fb.group({
      
        commentTexte:  ['',[Validators.required, Validators.minLength(3)]]

     });
     this.imageform = this.fb.group({
      
        imgUploader:  ['',[Validators.required, Validators.minLength(3)]]

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
    this.sess.addCartItem();
    this.createReservation();
    //location.reload();
  }

 onFileChange(event){
   /* let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        
         this.imageform = this.fb.group({
      
          img_upload:  file.name

         });
      };
    }*/
    /* let file = event.target.files[0]; 
     this.imageform.controls['imgUploader'].setValue(file ? file.name : '');*/
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
     // this.form.get('imgUploader').setValue(file);
     this.imageform.controls['imgUploader'].setValue(file ? file.name : '');
    }
   
  }
   private prepareSave(): any {
    let input = new FormData();
 
    input.append('imgUploader', this.imageform.get('imgUploader').value);
    console.log(input);
    return input;
  }

  uploadedPhoto(){
      this.imgphoto.id_cli = myGlobals.CURRENT_CLIENT._id;
      this.imgphoto.id_activite = this.id_activite;
      this.prepareSave();
      this.imgphoto.nom_img = this.imageform.get('imgUploader').value;

      // console.log(this.imageform.get('img_upload').value);

      //console.log(this.imageform.get('imgUploader').value);
      /*  this.photo.createPhoto(this.imgphoto).subscribe(data => {
         console.log(data);
        
      });*/
  }

  submitPhoto(){
     if(this.isLoggedIn){

       this.uploadedPhoto();
     } else {


     }

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
