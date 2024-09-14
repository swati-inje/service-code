import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface UserData {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  private apiUrlTwo = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private httpClient: HttpClient) {}
  

  getUserDetails(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrlTwo)
    // .pipe(
    //   catchError(this.handleError)
    // );
  }

  postUserData(data:UserData): Observable<any> {
    console.log(data, "Here is Data in Service File")
    return this.httpClient.post<any>(this.apiUrlTwo, data)
    // .pipe(
    //   catchError(this.handleError)
    // );
  }

  deletetUserData(data:any): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrlTwo, data).pipe(
      catchError(this.handleError)
    );
  }



  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error?.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error?.error?.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error?.status}\nMessage: ${error?.message}`;
    }
    return throwError(errorMessage);
  }
}
