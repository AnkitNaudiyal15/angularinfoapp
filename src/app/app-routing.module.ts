import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponentComponent} from './registration-component/registration-component.component';
import {LoginComponentComponent} from './login-component/login-component.component';
import { HomeComponent} from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
      { path: 'home', component: HomeComponent },
      { path: 'user', component: UserComponent },
       { path: '', component: LoginComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }
