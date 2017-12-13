import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Activites,  Commentaires, User } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { ActivitesService,CommentairesService, AuthService,DateService } from '../../../services/index';
@Component({
  selector: 'app-admin-commentaires',
  templateUrl: './admin-commentaires.component.html',
  styleUrls: ['./admin-commentaires.component.css']
})
export class AdminCommentairesComponent implements OnInit {
  commentaires : Commentaires[] = [];
  id_cli_com : any;
  id_act_com : any;
  date_com : String;
  user_info_com : User[] = [];
  act_com : Activites[] = [];

  constructor(private route : ActivatedRoute,
              private router : Router,
              private activite : ActivitesService,
              private commentaire : CommentairesService,
              private date : DateService,
              private auth : AuthService) { }

  getUserInfoCom(id : String){

  	this.auth.getAllClients().map((result) => result.filter( item => item._id === id ))
	  .subscribe((response)=>{
	  	this.user_info_com = response;
	  	//console.log('user : ',response);
	  })

  }
  getActCom(id : String){

  	this.activite.getAllActivites().map((result) => result.filter( item => item._id === id ))
	  .subscribe((response)=>{
	  	this.act_com = response;
	  	//console.log('user : ',response);
	  })

  }
  getAllComments(){
  
  	this.commentaire.getAllCommentaires().subscribe((data) => {
  		this.commentaires = data;
  		if (this.commentaires.length>0) {
	  		for (let i = 0; i<this.commentaires.length; i++) {
	  			this.id_cli_com = this.commentaires[i].id_client;
	  			this.id_act_com = this.commentaires[i].id_act;

	  			this.date_com = this.date.getFullDate(this.commentaires[i].date);

		  		this.getUserInfoCom(this.id_cli_com);
		  		this.getActCom(this.id_act_com);
	  		}
  		}
  		//console.log(data);
  	});

  }
  ngOnInit() {

  	this.getAllComments();
  }

}
