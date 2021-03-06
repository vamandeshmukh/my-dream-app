import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCmpComponent } from './my-cmp/my-cmp.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';
import { HighlightDirective } from './highlight.directive';
import { DataServiceComponent } from './data-service/data-service.component';
import { ServiceOneComponent } from './service-one/service-one.component';
import { ServiceTwoComponent } from './service-two/service-two.component';
import { MyServiceService } from './my-service.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmpServiceService } from './emp-service.service';
import { ConnectComponent } from './connectivity/connect/connect.component';
import { ServerConnectService } from './connectivity/server-connect.service';
import { JwtComponent } from './connectivity/jwt.component';
// import { AuthInterceptor } from './connectivity/connect/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MyCmpComponent,
    HeaderComponent,
    FooterComponent,
    ServersComponent,
    HighlightDirective,
    DataServiceComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    LoginComponent,
    RegisterComponent,
    ConnectComponent,
    JwtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  // https://angular.io/guide/providers

  providers: [MyServiceService,
    EmpServiceService,
    ServerConnectService,
    // add interceptor object here 
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
