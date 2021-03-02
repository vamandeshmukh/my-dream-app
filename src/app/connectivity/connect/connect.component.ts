import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/Department';
import { ServerConnectService } from '../server-connect.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  welcome: string = 'Not welcome';
  helloData: string = 'initialData';
  departments: Department[] = [];


  constructor(private serverConnectService: ServerConnectService) { }

  ngOnInit(): void {
    console.log('ConnectComponent ngOnInit');

    this.serverConnectService.getBaseUrl()
      .subscribe(response => {
        this.welcome = response;
      });

    // let token: string = this.serverConnectService.getJwtToken();
    // console.log(token);

    // this.serverConnectService.getHello()
    //   .subscribe(response => {
    //     this.helloData = response;
    //   });

    // this.serverConnectService.getDept(this.serverConnectService.getJwtToken())
    //   .subscribe(response => {
    //     this.departments = response;
    //   });

  }

  callHello() {
    console.log('callHello');
    this.serverConnectService.getHello(this.serverConnectService.getJwtToken())
      .subscribe(response => {
        this.helloData = response;
      });
  }

  callDept() {
    console.log('callDept');
    this.serverConnectService.getDept(this.serverConnectService.getJwtToken())
      .subscribe(response => {
        this.departments = response;
      });
  }

}
