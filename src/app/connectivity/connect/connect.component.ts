import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/Department';
import { ServerConnectService } from '../server-connect.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  helloData: string = 'initialData';
  departments: Department[] = [];

  constructor(private serverConnectService: ServerConnectService) { }

  ngOnInit(): void {
    console.log('ConnectComponent ngOnInit');

    this.serverConnectService.getHello()
      .subscribe(response => {
        this.helloData = response;
      });

    this.serverConnectService.getDept()
      .subscribe(response => {
        this.departments = response;
      });


  }

}
 