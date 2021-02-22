import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'user';
  password: string = 'password';

  onLogin() {
    console.log("logged in");
  }


  constructor() { }


  ngOnInit(): void {
    }

  }



