import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
  // mydate : Date;
  
  constructor() { }


  getFullDate(mydate : Date){
  	/* Retourne :  12/12/2017 à 00:54:20 en FR*/
  	let date = new Date(mydate);
  	return date.toLocaleString();
  }
  getDate(mydate : Date){
  	/* Retourne :  12/12/2017 en FR*/
  	let date = new Date(mydate);
  	return date.toLocaleDateString();
  }
  getAnnee(){

  }
  getMois(){


  }
  getJours(){


  }
  getHours(){

  }

  getMinutes(){


  }

}
