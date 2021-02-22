import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCmpComponent } from './my-cmp/my-cmp.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';
import { HighlightDirective } from './highlight.directive';
import { DataServiceComponent } from './data-service/data-service.component';
import { ServiceOneComponent } from './service-one/service-one.component';
import { ServiceTwoComponent } from './service-two/service-two.component';

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
    ServiceTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
