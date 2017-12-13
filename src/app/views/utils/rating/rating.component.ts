import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
 currentRate = 0;
  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.resettable = true;
	
  }

  ngOnInit() {
  }

}
