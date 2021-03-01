import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// reactive forms - better control, easier to test 
// template driven forms - (use two way data binding) 

// assignment - add at least three more properties (including phones) to employee object 
// modify the remaining code as required 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

/*
 
*/
export class RegisterComponent implements OnInit {

  employee = {
    eid: '',
    ename: ''
    // , phones: {home: '', office: ''}
  };

  onRegister(registerForm: NgForm) {
    console.log(this.employee.eid, this.employee.ename);
    registerForm.reset(); // other business functionality 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
