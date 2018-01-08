import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-backlink',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {
  title : String = '';
  nb_article : String = JSON.parse(localStorage.getItem("cart_qty"));
 constructor(private _location: Location) {    }
  backClicked() {
        this._location.back();
  }
  getTitleButton(){
    console.log(this.nb_article);
  	if (this._location.path() == '/mon-panier' && (this.nb_article !== null)) {
  		this.title = "Continuer mes achats";
  	//} else if (this._location.path() == '/mon-panier') {
  	//	this.title = "Continuer mes achats"
  	} else {

  		this.title = "Retour";

  	}
  	return this.title;
  }
  ngOnInit() {

  	this.getTitleButton();
  }

}
