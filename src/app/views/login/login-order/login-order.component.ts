import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/index';


@Component({
  selector: 'app-login-order',
  templateUrl: './login-order.component.html',
  styleUrls: ['./login-order.component.css']
})
export class LoginOrderComponent implements OnInit {

  constructor( private user : UserService) { }

  ngOnInit() {
  }

}
