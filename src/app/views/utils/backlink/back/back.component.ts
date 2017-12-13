import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-backlink',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {
  title : String = '';
 constructor(private _location: Location) {    }
  backClicked() {
        this._location.back();
  }
  getTitleButton(){
  	if (this._location.path() == '/mon-panier') {
  		this.title = "Continuer mes achats"
  		// code...
  //	} else if (this._location.path() == '/mon-panier') {
  		// code...
  	} else {

  		this.title = "Retour";

  	}
  	return this.title;
  }
  ngOnInit() {

  	this.getTitleButton();
  }

}
