import { Component } from '@angular/core';

@Component({
  selector: 'app-my-cmp',
  templateUrl: './my-cmp.component.html',
  styleUrls: ['./my-cmp.component.css']
})
export class MyCmpComponent {
  color: string;
  constructor(color: string) {
    this.color = 'black';
  }

}
