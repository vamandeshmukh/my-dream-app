import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './connectivity/connect/connect.component';
import { JwtComponent } from './connectivity/jwt.component';
import { LoginComponent } from './login/login.component';
import { MyCmpComponent } from './my-cmp/my-cmp.component';
import { RegisterComponent } from './register/register.component';

// path means endpoint 
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mycmp', component: MyCmpComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'jwt', component: JwtComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
