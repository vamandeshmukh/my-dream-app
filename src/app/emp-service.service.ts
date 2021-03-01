import { Injectable } from '@angular/core';
// import { Employee } from './models/Employee';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './models/Department';
import { map } from 'rxjs/operators';

// https://angular.io/guide/providers
@Injectable({
  providedIn: 'root',
})
export class EmpServiceService {

  private serverUrl = 'http://localhost:8090/';
  public jwtTokenStringValue: string = '';

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     // 'Accept': 'application/json ',
  //     // 'Content-Type': 'application/json',
  //     // 'responseType': 'text',
  //     'Authorization': 'Bearer ' + this.jwtTokenStringValue
  //   })
  // }

  constructor(private http: HttpClient) {
    console.log('EmpServiceService');
  }

  // public getHello(): Observable<string> {
  //   console.log('getHello');
  //   return this.http.get<string>(`${this.serverUrl}hello`, { responseType: 'text' as 'json' });
  // }

  // public loginServer(loginData: { username: string; password: string; }): string {

  //   console.log('loginServer');
  //   this.http.post<string>(`${this.serverUrl}login`, loginData, 
  // { responseType: 'text' as 'json' })
  //     .subscribe(response => 
  // { this.jwtTokenStringValue = response; console.log(this.jwtTokenStringValue); });
  //   return this.jwtTokenStringValue;
  // }


  // public loginServer(loginData: { username: string; password: string; }): any {
  //   console.log('loginServer');
  //   this.http.post<string>(`${this.serverUrl}login`, loginData).pipe(
  //     map(
  //       someData => {
  //         sessionStorage.setItem('username', loginData.username);
  //         let tokenStr = 'Bearer ' + someData;
  //         sessionStorage.setItem('token', tokenStr);
  //         return someData;
  //       }
  //     )
  //   );
  // }

  // public getDeptData(): Observable<Department[]> {
  //   console.log('getDeptData');
  //   return this.http.get<Department[]>(`${this.serverUrl}departments`);
  // }

  // public getDeptData(): any {
  //   console.log('getDeptDataWithToken');

    // var headers_object = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': "Bearer " + this.jwtTokenStringValue
    // });

    // const httpOptions = {
    //   headers: headers_object
    // };

    // console.log(httpOptions.headers);

  //   return this.http.get<ArrayBuffer>(`${this.serverUrl}departments`)
  //     .subscribe(data => console.log(data));
  // }


}