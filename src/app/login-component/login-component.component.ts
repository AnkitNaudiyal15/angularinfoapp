import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.sass']
})
export class LoginComponentComponent implements OnInit {

  constructor(private router:Router,) { }
  username: string;
  password: string;
  showSpinner:string;
  

  ngOnInit(): void {

  }
      login() {
        this.showSpinner = 'block';
        if(this.username == 'admin' && this.password == 'admin'){
          this.router.navigate(["home"]);
        }else {
          this.showSpinner = 'none';
          alert("Invalid credentials");
        }
      }
  
}
