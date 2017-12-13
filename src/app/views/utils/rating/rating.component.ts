import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Commentaires } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { NotesService, AuthService } from '../../../services/index';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
 etoile : Number = 0;
 isLoggedIn = this.auth.isLoggedIn();

 constructor( private config: NgbRatingConfig,
              private note : NotesService,
              private auth : AuthService) {
              config.max = 5;
              config.resettable = true;
              config.readonly = true;


	
  }

  private disableRate(){
    if (this.isLoggedIn) {
      
      this.config.readonly = false;
    } else {

       this.config.readonly = true;

    }
  }
  private onClick(value: Number) {
     
        console.log(this.etoile);

   }

  ngOnInit() {

    this.disableRate();

  }

}
