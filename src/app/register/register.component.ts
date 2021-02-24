import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employee = {
    eid: '',
    ename: ''
  };

  onRegister(registerForm: NgForm) {
    console.log(this.employee.eid, this.employee.ename);
    registerForm.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
