import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { share, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    public isApplicationOnline!: boolean;
    constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

    public getCurrency(path: string, params?: any): Observable<any> {
        return this.http
            .get<any>(`${environment.currencyApi}${path}&apiKey=${environment.accessKey}`, { params })
            .pipe(
                share(),
                catchError((error: any) => {
                    return this.handleError(error);
                })
            );
    }

    private handleError(error: any): Observable<any> {
        if (this.isApplicationOnline) {
            this.snackBar.open('Http Error', error?.statusText, {
                duration: 4000
            });
        }
        return of(error);
    }
}
