import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/Department';
import { JwtClientService } from './jwt-client.service';


@Component({
    selector: 'app-jwt',
    template: '<h1>Jwt Component</h1> <p> {{response}} </p>',
    styles: ['']
})
export class JwtComponent implements OnInit {

    authRequest: any = {
        'username': 'user@deloitte.com',
        'password': 'password'
    }

    response: any;


    constructor(private jwtClientService: JwtClientService) { }

    ngOnInit(): void {
        console.log('JwtComponent ngOnInit');
        this.getAccessToken(this.authRequest);
    }

    public getAccessToken(authRequest: any) {
        console.log('getAccessToken');
        let resp = this.jwtClientService.generateToken(authRequest)
            .subscribe(data => this.callHello(data));
    }

    public callHello(token: any) {
        console.log('getAccessToken');
        let resp = this.jwtClientService.getHello(token)
            .subscribe(data => this.response = data);
    }

    // public getAccessToken(authRequest: any) {
    //     console.log('getAccessToken');
    //     let resp = this.jwtClientService.generateToken(authRequest)
    //         .subscribe(data => console.log(data));
    // }

}
