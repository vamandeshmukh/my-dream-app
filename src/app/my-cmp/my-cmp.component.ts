import { Component, OnInit } from '@angular/core';
import { DataServiceComponent } from '../data-service/data-service.component';
import { MyServiceService } from '../my-service.service';
import { ServiceOneComponent } from '../service-one/service-one.component';
import { ServiceTwoComponent } from '../service-two/service-two.component';

@Component({
  selector: 'app-my-cmp',
  templateUrl: './my-cmp.component.html',
  styleUrls: ['./my-cmp.component.css']
})
export class MyCmpComponent implements OnInit {

  // dataService: DataServiceComponent;

  myStringData: string;

  constructor(public myServiceService: MyServiceService) {
    this.myStringData = this.myServiceService.myDataService();
    // this.dataService = new ServiceOneComponent();
    // this.dataService = new ServiceTwoComponent();
  }
  ngOnInit(): void {
    this.myStringData = this.myServiceService.myDataService();
  }

  color: string = '';

}
