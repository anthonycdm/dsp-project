import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Activites,  Commentaires, User } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { ActivitesService,CommentairesService, AuthService,DateService } from '../../../services/index';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class AdminClientComponent implements OnInit {

  commentaires : Commentaires[] = [];
  client : any= [];
  id_client = this.route.snapshot.paramMap.get('id');
  id_act_com : any;
  date_com : any = [];
  user_info_com : any = [];
  act_com : any = [];

  constructor(private route : ActivatedRoute,
              private router : Router,
              private activite : ActivitesService,
              private commentaire : CommentairesService,
              private date : DateService,
              private auth : AuthService) { }

  getClient(id : String){
  
  	this.auth.getAllClients()
  	.map((result) => result.filter( item => item._id === id ))
    .subscribe((data) => {
  		this.client = data[0];
  		console.log(data);
  	});

  }   
   getAllCommentsByClient(id : String){
  
  	this.commentaire.getAllCommentaires()
  	.map((result) => result.filter( item => item.id_client === id ))
    .subscribe((data) => {
  		this.commentaires = data;
  		if (this.commentaires.length>0) {
  			for (let i = 0; i<this.commentaires.length; i++) {
  				this.date_com.push(this.date.getFullDate(this.commentaires[i].date));
  				this.getActCom(this.commentaires[i].id_act);
  			}
	  		/*for (let i = 0; i<this.commentaires.length; i++) {
	  			this.id_cli_com = this.commentaires[i].id_client;
	  			this.id_act_com = this.commentaires[i].id_act;
	  			this.date_com.push(this.date.getFullDate(this.commentaires[i].date));
          this.getUserInfoCom(this.id_cli_com);
		  		this.getActCom(this.id_act_com);
	  		}*/
        //console.log(this.commentaires);
  		}
 
  	});

  }   
  getActCom(id : String){
  	this.activite.getAllActivites().map((result) => result.filter( item => item._id === id ))
	  .subscribe((response)=>{
	  	this.act_com.push(response);
	  	//console.log('activite : ',this.act_com);
      

	  })

  }
  ngOnInit() {

  	this.getAllCommentsByClient(this.id_client);
  	this.getClient(this.id_client);
  }

}
