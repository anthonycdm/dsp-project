import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photo-rating',
  templateUrl: './photo-rating.component.html',
  styleUrls: ['./photo-rating.component.css']
})
export class PhotoRatingComponent implements OnInit {
currentRate = 0;
  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.resettable = true;
	
  }

  ngOnInit() {
  }

}
