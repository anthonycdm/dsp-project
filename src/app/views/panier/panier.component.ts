import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Activites, Reservation } from '../../models/index';
import * as myGlobals from '../../globals/index';
import { Location } from '@angular/common';
import { ActivitesService,AuthService,ReservationService,CartService } from '../../services/index';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  
  }

}
