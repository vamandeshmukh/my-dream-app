import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  public isLoggedIn: boolean = false; // step 1

  myDataService(): string {
    this.isLoggedIn = true;
    return 'myDataService Data'; // db connections 

    // this.dataService = new ServiceOneComponent();
    // this.dataService = new ServiceTwoComponent();
  }

  constructor() {
    // this.isLoggedIn = false;
    console.log('MyServiceService');
  }
}
