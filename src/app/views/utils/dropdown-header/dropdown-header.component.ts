import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../services/index';
import { Router, ActivatedRoute } from '@angular/router';
import  * as myGlobals from '../../../globals/index';

@Component({
  selector: 'app-dropdown-header',
  templateUrl: './dropdown-header.component.html',
  styleUrls: ['./dropdown-header.component.css'],
  providers: [NgbDropdownConfig]
})
export class DropdownHeaderComponent implements OnInit {
 userConnected = myGlobals.CURRENT_CLIENT;
   isLoggedIn = this.authService.isLoggedIn();

 constructor(config: NgbDropdownConfig, private authService: AuthService, private router : Router) {
    // customize default values of dropdowns used by this component tree
    config.placement = 'top-right';
    config.autoClose = true;

  }

  ngOnInit() {
  }
  login(){
       
     this.router.navigate(['/login']);

  }
  myaccount(){
     
     this.router.navigate(['/mon-compte']);
  }

  logout(){

    this.authService.logout();
    this.router.navigate(['/']);
    location.reload();

  }
}
