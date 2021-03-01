import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class JwtClientService {

    constructor(private http: HttpClient) { }

    public generateToken(request: any) {
        return this.http.post('http://localhost:8090/login', request, { responseType: 'text' as 'json' });
    }

    public getHello(token: any) {
        let tokenStr = `Bearer ${token}`;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.get('http://localhost:8090/', { headers, responseType: 'text' as 'json' });
    }
}

