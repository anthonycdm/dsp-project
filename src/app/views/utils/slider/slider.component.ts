import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NgbCarouselConfig] 

})

export class SliderComponent implements OnInit {
 
  constructor(config: NgbCarouselConfig) { 
  
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  
  }

  ngOnInit() {
   
  }
 
 
}
