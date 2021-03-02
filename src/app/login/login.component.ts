
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';
import { ServerConnectService } from '../connectivity/server-connect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  loginData: { username: string; password: string; } = { "username": "user@deloitte.com", "password": "password" };
  username: string = 'user@deloitte.com';
  password: string = 'password';

  constructor(
    private formBuilder: FormBuilder,
    private myService: MyServiceService,
    private empService: EmpServiceService,
    private serverConnectService: ServerConnectService,
    private router: Router
  ) {

    this.loginFormGroup = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [
        Validators.required
      ]]
    })

    // this.loginFormGroup = this.formBuilder.group({
    //   username: ['', [
    //     Validators.required,
    //     Validators.email,
    //     // Validators.pattern('')
    //   ]],
    //   password: ['', [
    //     Validators.required
    //   ]]
    // })
  }

  ngOnInit(): void {
  }

  onLogin() {
    let username = this.loginFormGroup.get("username")?.value;
    let password = this.loginFormGroup.get("password")?.value;
    console.log('onLogin');
    // this.serverConnectService.getLogin();
    if (username === 'user@deloitte.com') {
      this.serverConnectService.getLogin(username, password);
      console.log('login successful');
      this.router.navigate(['/connect']);
    }
    else {
      console.log('login failed.');
    }

  }

}
