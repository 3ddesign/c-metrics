import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { share, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getCurrency(path: string, params?: any): Observable<any> {
    return this.http
      .get<any>(`${environment.currencyApi}/${path}`, { params })
      .pipe(
        share(),
        catchError((error: any) => {
          return this.handleError(error);
        })
      );
  }

  public getPrivatCurrency(): Observable<any> {
    return this.http
      .get<any>(`${environment.currencyApi}/exchange_rates?json&date=01.12.2014`)
      .pipe(
        share(),
        catchError((error: any) => {
          return this.handleError(error);
        })
      );
  }

  private handleError(error: any) {
    return of(error);
  }
}
