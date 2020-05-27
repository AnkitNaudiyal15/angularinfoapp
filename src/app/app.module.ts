import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfodashboardComponent } from './infodashboard/infodashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { InfonavigatinComponent } from './infonavigatin/infonavigatin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LoginComponentComponent } from './login-component/login-component.component';
import {HomeComponent} from './home/home.component';
import {MaterialModule } from './material.module';


import {Router} from '@angular/router';


import { UserComponent } from './user/user.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CarbooncalculatorComponent } from './carbooncalculator/carbooncalculator.component';




@NgModule({
  declarations: [
    AppComponent,
    InfodashboardComponent,
    InfonavigatinComponent,
    //RegistrationComponentComponent,
    LoginComponentComponent,
    HomeComponent,
    UserComponent,
    UserinfoComponent,
    TableComponent,
    CarbooncalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  username: string;
  password: string;
  isLoginInfo : boolean;
  

  constructor(private router:Router) { }
 

  ngOnInit(): void {
    // if(this.login){
    //   this.isLoginInfo=true;
    // }
    // else{
    //   this.isLoginInfo=false;
    // }

    // if(this.isLoginInfo){
    //   this.router.navigate(["home"]);
    // }
    // else{
    //   this.router.navigate(["login"]);
    // }
  }



 
}
