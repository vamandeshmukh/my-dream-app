import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup; 

  username: string = 'user@deloitte.com';
  password: string = 'password';
  isLoggedIn: boolean = false;

  onLogin() {
    let username = this.loginFormGroup.get("username")?.value;
    let password = this.loginFormGroup.get("password")?.value;

    if (this.username === username && this.password === password) {
      this.isLoggedIn = true;
      console.log(this.isLoggedIn);
      alert("Login succcessful");
    }
    else {
      alert("login failed");
    }
    console.log("logged in");
  }


  constructor(private formBuilder: FormBuilder) {
    // this.loginFormGroup = this.formBuilder.group({
    //   username: '',
    //   password: ''
    // });

    this.loginFormGroup = this.formBuilder.group({
      username: ['', [
      Validators.required,
      Validators.email, 
      // Validators.pattern('')
      ]],
      password: ['', [
      Validators.required
      ]]
      })
  
  }

  ngOnInit(): void {
  }

}

