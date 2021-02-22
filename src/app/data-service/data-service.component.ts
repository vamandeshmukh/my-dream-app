import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css']
})
export class DataServiceComponent implements OnInit {

  constructor() { }

  myData(): string {
    return 'Some data';
  }

  ngOnInit(): void {
  }

}
