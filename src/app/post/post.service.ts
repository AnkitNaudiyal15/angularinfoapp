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
      // 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
  }

  constructor(private httpClient: HttpClient) { }
  

  create(postdata): Observable<Postdata> {
  

    //var formData = new FormData();
    // const data={
    //   "post_title":postdata.get('post_titile'),
    //   "post_discription":postdata.get('post_discription'),
    //   "post_image":'/uploads/'+postdata.get('post_image'),
    // };

    return this.httpClient.post<Postdata>(this.apiServer + '/add-post/', postdata, this.httpOptions)
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
