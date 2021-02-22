import { Component } from '@angular/core';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-my-cmp',
  templateUrl: './my-cmp.component.html',
  styleUrls: ['./my-cmp.component.css']
})
export class MyCmpComponent {

  dataService: DataServiceComponent;

  constructor() {
  }

  color: string = '';

}
