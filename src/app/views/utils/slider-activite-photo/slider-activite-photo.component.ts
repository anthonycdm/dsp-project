import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider-activite-photo',
  templateUrl: './slider-activite-photo.component.html',
  styleUrls: ['./slider-activite-photo.component.css'],
  providers: [NgbCarouselConfig] 

})
export class SliderActivitePhotoComponent implements OnInit {

    constructor(config: NgbCarouselConfig) { 
  
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  
  }


  ngOnInit() {
  }

}
