import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	
   cart_items : any;


  constructor() {


  }

 getCartItems(){

        this.cart_items =  localStorage.getItem("cartQty") || 0;

  }

  

  ngOnInit(){  

    this.getCartItems();


  }

}
