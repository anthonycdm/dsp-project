import { Component, HostListener,Output,ElementRef,EventEmitter,Directive,Renderer2 } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: '[app-confirm]',
  templateUrl :'./confirm-template/confirm-template.html'
})
@Directive({
  selector: 'confirm'
})
export class ConfirmDirective {
 

  constructor(private el: ElementRef) { 


  }

 

}

 


