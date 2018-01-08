import { Component, OnInit } from '@angular/core';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import * as myGlobals from '../../../globals/index';

@Component({
  selector: 'app-langues',
  templateUrl: './langues.component.html',
  styleUrls: ['./langues.component.css']
})
export class LanguesComponent implements OnInit {

  langues : Array<String> = ['fr','en'];
  other_lang :  Array<String> = [];
  langue_cur : any;
  constructor(private translate: TranslateService) {
	translate.setDefaultLang(myGlobals.LANGUE);
	
  	// console.log(translate.currentLang);
  	// this.langue_cur = translate.currentLang;
  	this.getCurrentLangue();

  }
  getCurrentLangue(){
  	if (localStorage.getItem("langue") === null || localStorage.getItem("langue") === "undefined") {
		this.langue_cur = myGlobals.LANGUE;

	} else {

		this.langue_cur = JSON.parse(localStorage.getItem("langue"));
	}   

  this.translate.use(this.langue_cur);

  }
  onClick(event){
  let new_lang = event.toElement.innerHTML;
	this.translate.use(new_lang);
	localStorage.setItem("langue",JSON.stringify(new_lang));
	setTimeout(() => {this.langue_cur = JSON.parse(localStorage.getItem("langue"));}, 500);
	location.reload();
  }
  getOtherLang(){

  	for (var i = 0; i < this.langues.length; i++) {
  		if (this.langue_cur !== this.langues[i]) {
  	  		this.other_lang.push(this.langues[i]);

  		}

  	}
  		

  }
 
  ngOnInit() {
  	this.getOtherLang();
  }


}
