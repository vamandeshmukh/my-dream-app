import { Component } from '@angular/core';
import { DataServiceComponent } from '../data-service/data-service.component';
import { ServiceOneComponent } from '../service-one/service-one.component';

@Component({
  selector: 'app-my-cmp',
  templateUrl: './my-cmp.component.html',
  styleUrls: ['./my-cmp.component.css']
})
export class MyCmpComponent {

  dataService: DataServiceComponent;

  constructor() {
    this.dataService = new ServiceOneComponent();
  }

  color: string = '';

}
