import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders} from "@angular/common/http";

import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { Postdata } from './postdata';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiServer = "http://localhost:8000/api";
  httpOptions = {
    headers: new HttpHeaders({
       'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  

  create(postdata): Observable<Postdata> {
    return this.httpClient.post<Postdata>(this.apiServer + '/add-post', postdata)
    .pipe(
      catchError(this.errorHandler)
    )
  }  



  get(): Observable<Postdata> {
    return this.httpClient.get<Postdata>(this.apiServer + '/post', this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }


}
