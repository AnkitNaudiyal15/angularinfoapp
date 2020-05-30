import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-infonavigatin',
  templateUrl: './infonavigatin.component.html',
  styleUrls: ['./infonavigatin.component.css']
})
export class InfonavigatinComponent {

  dashboard:boolean;
  table : boolean;
  calculator:boolean;
  post:boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private router:Router, ) {}

  ngOnInit(): void {
    this.post = true;
  }
  logoutUser(){
    this.router.navigate(["login"]);
  }

  dashboardSelection(){
    this.dashboard = true;
    this.table = false;
    this.calculator = false;
    this.post = false;
  }

  tableSelection(){
    this.dashboard = false;
    this.table = true;
    this.calculator = false;
    this.post = false;
  }

  calculatorSelection(){
    this.dashboard = false;
    this.table = false;
    this.calculator = true;
    this.post = false;
  }

  postSelection(){
    this.dashboard = false;
    this.table = false;
    this.calculator = false;
    this.post = true;
  }
}
