import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  username: string = 'user';
  password: string = 'password';

  onLogin() {
    let username = this.loginFormGroup.get("username").value;
    let password = this.loginFormGroup.get("password").value;

    if (this.username === username && this.password === password) {
      alert("Login succcessful");
    }
    else {
      alert("login failed");
    }


    console.log("logged in");
  }

  constructor(private formBuilder: FormBuilder) {
    this.loginFormGroup = this.formBuilder.group({
      username: 'user',
      password: 'password'
    });
  }

  ngOnInit(): void {
  }

}

