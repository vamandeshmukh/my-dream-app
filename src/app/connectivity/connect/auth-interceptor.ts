// import { Injectable } from '@angular/core';
// import {
//     HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
// } from '@angular/common/http';
// import { ServerConnectService } from '../server-connect.service';

// // import { AuthService } from '../auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//     constructor(private serverConnectService: ServerConnectService) { }

//     intercept(req: HttpRequest<any>, next: HttpHandler) {

//         // Get the auth token from the service.
//         // const authToken = this.serverConnectService.getAuthorizationToken();
//         const authToken = this.serverConnectService.getJwtToken();
//         console.log(authToken);

//         /*
//         * The verbose way:
//         // Clone the request and replace the original headers with
//         // cloned headers, updated with the authorization.
//         const authReq = req.clone({
//           headers: req.headers.set('Authorization', authToken)
//         });
//         */

//         // Clone the request and set the new header in one step.
//         const authReq = req.clone({ setHeaders: { Authorization: authToken } });

//         // send cloned request with header to the next handler.
//         return next.handle(authReq);
//     }
// }
