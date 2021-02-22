import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  myDataService(): string {
    return 'myDataService Data';
  }

  constructor() { }
}
