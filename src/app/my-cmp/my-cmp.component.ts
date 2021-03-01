import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServiceComponent } from '../data-service/data-service.component';
import { EmpServiceService } from '../emp-service.service';
import { Department } from '../models/Department';
import { Employee } from '../models/Employee';
import { MyServiceService } from '../my-service.service';
import { ServiceOneComponent } from '../service-one/service-one.component';
import { ServiceTwoComponent } from '../service-two/service-two.component';

@Component({
  selector: 'app-my-cmp',
  templateUrl: './my-cmp.component.html',
  styleUrls: ['./my-cmp.component.css']
})
export class MyCmpComponent implements OnInit {

  // helloData: string = 'initial value';
  // departments: Department[] = [];


  // constructor(public myServiceService: MyServiceService, public empService: EmpServiceService) {
  //   console.log('MyCmpComponent');
  // }

  // color: string = '';


  ngOnInit(): void {

    console.log('my-cmp ngOnInit');

    // this.empService.getDeptData().subscribe(data => this.departments = data);
    // console.log('dept data recieved');

    // this.empService.getHello().subscribe((data2) => {
    //   this.helloData = data2;
    //   console.log('hello data recieved');
    // });

  }

}


