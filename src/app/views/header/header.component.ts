import { Component, OnInit } from '@angular/core';
import  * as myGlobals from '../../globals/index';
import { SessionsService } from '../../services/index';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	
  cart_items : any;

  constructor(private session : SessionsService) {


  }

  getCartItems(){

        this.cart_items = 0 ||localStorage.getItem("cartQty") ;

  }
  getSession(){

    this.getCartItems();
  	this.session.getSession();

  }

  

  ngOnInit(){  


  	this.getSession();

  }

}
