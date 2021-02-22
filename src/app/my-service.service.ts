import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  myDataService(): string {
    return 'myDataService Data'; // db connections 

    // this.dataService = new ServiceOneComponent();
    // this.dataService = new ServiceTwoComponent();
  }

  constructor() { console.log('MyServiceService');}
}
