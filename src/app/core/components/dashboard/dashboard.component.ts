import { Component } from '@angular/core';

import { forkJoin } from 'rxjs';
import { take } from 'rxjs/operators';
import { ICMetricsUAHCurrencyResponce } from '../../interfaces/http.interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public currentUAHCurrency!: number;
  public currentUSDCurrency!: number;
  public prevUAHCurrency!: number;
  public prevUSDCurrency!: number;

  public prevCurrency!: number;

  private currentDate = `${new Date().getFullYear()}-${'0' + new Date().getDate().toString().slice(-2)}-${new Date().getMonth()}`;
  private prevDate = `${new Date().getFullYear()}-${'0' + (new Date().getDate() - 1).toString().slice(-2)}-${new Date().getMonth()}`;

  constructor(private apiService: ApiService) {
    this.getCurrencyData();
   }

  private getCurrencyData(): void {
    const currentCurrencyRequest = this.apiService.getCurrency(`/api/v7/convert?q=USD_UAH,UAH_USD&compact=ultra&date=${this.currentDate}`);
    const prevCurrencyRequest = this.apiService.getCurrency(`/api/v7/convert?q=USD_UAH,UAH_USD&compact=ultra&date=${this.prevDate}`);

    forkJoin([currentCurrencyRequest, prevCurrencyRequest])
    .pipe(take(1)).subscribe((currency: ICMetricsUAHCurrencyResponce[]) => {
      this.currentUAHCurrency = currency[0].USD_UAH[this.currentDate];
      this.currentUSDCurrency = currency[0].UAH_USD[this.currentDate];
      this.prevUAHCurrency = currency[1].USD_UAH[this.prevDate];
      this.prevUSDCurrency = currency[1].UAH_USD[this.prevDate];
    });
  }
}
