
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // 1. element default three ways
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css', '../app.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: String = 'Not created.';
  serverName: String = '';
  serverCreated: boolean = false;
  myName: string = 'Sonu';
  mySalary: number = 4578.84589654;
  myJoiningDate: Date = new Date();
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }
  onUpdateServerName(event: Event) { // (event: any)
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `Server ${this.serverName} created.`;
  }
  ngOnInit() {
  }
}
