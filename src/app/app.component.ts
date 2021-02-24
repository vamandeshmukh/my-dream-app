import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-dream-app';
  name: string = 'Vaman';
  age: number = 10;
  isIndian: boolean = false;
  status: string = 'No status';
  constructor(myService: MyServiceService) {
    setTimeout(() => {
      this.isIndian = true;
      console.log(this.isIndian);
    }, 5000);
  }
  onChangeStatus(event: any) {
    // this.status = event.target.value;
    this.status = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
  changeStatus() {
    this.status = 'I am an Indian.';
    console.log(this.status);
  }
  getMyAge() {
    console.log(this.age);
    return this.age;
  }
}
