import { Component, OnInit } from '@angular/core';
import { Activites } from '../../models/index';
import {Router} from '@angular/router';
import { ActivitesService } from '../../services/index';


@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent implements OnInit {

  myActivities : any =[];
  constructor(private router: Router, private activites :ActivitesService ) { }

  getActivites(){

  	 this.activites.getAllActivites().subscribe(data => {this.myActivities=data ;console.log(this.myActivities);});

  }

  
  ngOnInit() {

   this.getActivites();
  }



}
