import { Component, OnInit } from '@angular/core';
import { Activites } from '../../../models/index';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivitesService } from '../../../services/index';

@Component({
  selector: 'app-admin-home-activite',
  templateUrl: './admin-home-activite.component.html',
  styleUrls: ['./admin-home-activite.component.css']
})
export class AdminHomeActiviteComponent implements OnInit {


  myActivities: any =[];
  myActivity  : any =[];
  constructor(private router: Router,
  			  private activites :ActivitesService,
  			  private route : ActivatedRoute,
  			  private activite :ActivitesService ,) { }

  getActivites(){

  	 this.activites.getAllActivites().subscribe(data => {this.myActivities=data ;console.log(this.myActivities);});

  }
  deleteActivite(){

  	// let id_activite = this.route.snapshot.paramMap.get('id');
    // this.activite.deleteActivite(id_activite).subscribe(data => {this.myActivity=data ;console.log(this.myActivity);});
    console.log('delete');
  }
  
  ngOnInit() {

   this.getActivites();
  }



}
