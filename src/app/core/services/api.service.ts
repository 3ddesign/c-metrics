import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { Observable, of } from 'rxjs';
import { catchError, share } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
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
