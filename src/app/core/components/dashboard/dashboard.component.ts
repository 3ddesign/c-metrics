import { Component } from '@angular/core';

import { ICMetricsUAHCurrencyResponce } from '../../interfaces/currency.interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public isLoadingContent = true;
  public currentUAHCurrency!: number;
  public currentUSDCurrency!: number;
  public prevUAHCurrency!: number;
  public prevUSDCurrency!: number;
  public currentDate = `${new Date().getFullYear()}-${this.addZero(new Date().getMonth() + 1)}-${this.addZero(new Date().getDate())}`;
  private prevDate = `${new Date().getFullYear()}-${this.addZero(new Date().getMonth() + 1)}-${this.addZero(new Date().getDate() - 1)}`;

  constructor(private apiService: ApiService) {
    this.getCurrencyData();
   }

  private getCurrencyData(): void {
    this.isLoadingContent = true;
    this.apiService.getCurrency(`/api/v7/convert?q=USD_UAH,UAH_USD&compact=ultra&date=${this.prevDate}&endDate=${this.currentDate}`)
    .subscribe((currency: ICMetricsUAHCurrencyResponce) => {
      this.currentUAHCurrency = currency.USD_UAH[this.currentDate];
      this.currentUSDCurrency = currency.UAH_USD[this.currentDate];
      this.prevUAHCurrency = currency.USD_UAH[this.prevDate];
      this.prevUSDCurrency = currency.UAH_USD[this.prevDate];
      this.isLoadingContent = false;
    });
  }

  private addZero(date: number): string | number {
       return date.toString().length === 1 ? '0' + date : date;
    }
}
