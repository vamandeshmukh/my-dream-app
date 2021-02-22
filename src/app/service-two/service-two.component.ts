import { Component, OnInit } from '@angular/core';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-service-two',
  templateUrl: './service-two.component.html',
  styleUrls: ['./service-two.component.css']
})
export class ServiceTwoComponent extends DataServiceComponent implements OnInit {

  constructor() { super(); }
  myData(): string {
    return 'Service Two Data';
  }

  ngOnInit(): void {
  }

}
