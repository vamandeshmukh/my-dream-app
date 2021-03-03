import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/Department';
import { Employee } from '../models/Employee';

// Interceptor - localStorage  
// Cookies 

@Injectable({
  providedIn: 'root'
})
export class ServerConnectService {

  jwtToken: string = '';


  constructor(private http: HttpClient) { }

  getHello(token: string): Observable<string> {
    console.log('getHello');
    let tokenString: string = `Bearer ${token}`;
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', tokenString);
    return this.http.get<string>('http://localhost:8090/hello',
      { headers, responseType: 'text' as 'json' });
  }

  // getDept(): Observable<Department[]> {
  //   console.log('getDept');
  //   return this.http.get<Department[]>('http://localhost:8090/departments');
  // }

  getDept(token: string): Observable<Department[]> {
    console.log('getDept');
    let tokenString: string = `Bearer ${token}`;
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', tokenString);
    return this.http.get<Department[]>
      ('http://localhost:8090/departments', { headers, responseType: 'json' });
  }

  // getEmployees(): Observable<Employee[]> {
  //   console.log('getEmployee');
  //   return this.http.get<Employee[]>('http://localhost:8090/employees');
  // }

  getLogin(username: string, password: string): any {
    console.log('getLogin');
    this.http.post<string>('http://localhost:8090/login',
      { username, password },
      { responseType: 'text' as 'json' })
      .subscribe(response => {
        this.jwtToken = response;
        console.log(this.jwtToken);
        return this.jwtToken;
      });
  }

  getBaseUrl() { // welcome 
    console.log('getbaseUrl');
    return this.http.get<string>('http://localhost:8090/', { responseType: 'text' as 'json' });
  }

  getJwtToken() {
    console.log(this.jwtToken);
    return this.jwtToken;
  }
}

