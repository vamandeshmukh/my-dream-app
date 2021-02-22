import { Component, OnInit } from '@angular/core';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-service-one',
  templateUrl: './service-one.component.html',
  styleUrls: ['./service-one.component.css']
})
export class ServiceOneComponent extends DataServiceComponent implements OnInit {

  constructor() { super(); }

  myData(): string {
    return 'Service One Data';
  }

  ngOnInit(): void {
  }

}
