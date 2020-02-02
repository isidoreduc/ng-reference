import { Injectable } from '@angular/core';
import { IProduct } from '../model/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // need to add as asset to angular.json in assets - 'src/api'
  private productUrl = 'api/products.json';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    const errorMessage =
      err.error instanceof ErrorEvent
        ? // client side or network error
          `An error occuered: ${err.error.message}`
        : // server side error
          `Service returned code: ${err.status}, error message: ${err.message}`;
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
