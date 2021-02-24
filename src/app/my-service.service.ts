import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  public isLoggedIn: boolean; // step 1

  myDataService(): string {
    return 'myDataService Data'; // db connections 

    // this.dataService = new ServiceOneComponent();
    // this.dataService = new ServiceTwoComponent();
  }

  constructor() {
    this.isLoggedIn = false;
    console.log('MyServiceService');
  }
}
