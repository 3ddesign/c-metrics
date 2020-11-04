import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public currentUAHCurrency!: number;
  public currentUSDCurrency!: number;
  public prevUAHCurrency!: number;
  public prevUSDCurrency!: number;

  public prevCurrency!: number;

  private currentDate = `${new Date().getFullYear()}-${'0' + new Date().getDay().toString().slice(-2)}-${new Date().getMonth()}`;
  private prevDate = `${new Date().getFullYear()}-${'0' + (new Date().getDay() - 1).toString().slice(-2)}-${new Date().getMonth()}`;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCurrencySummary();
    this.getPrevDaySummary();
  }

  private getCurrencySummary(): void {
    this.apiService.getCurrency(`/api/v7/convert?q=USD_UAH,UAH_USD&compact=ultra&date=${this.currentDate}`).pipe(take(1))
    .subscribe((currency: {USD_UAH: { [key: string]: number }, UAH_USD: { [key: string]: number }}) => {
      this.currentUAHCurrency = currency.USD_UAH[this.currentDate];
      this.currentUSDCurrency = currency.UAH_USD[this.currentDate];
    });
  }

  private getPrevDaySummary(): void {
    this.apiService.getCurrency(`/api/v7/convert?q=USD_UAH,UAH_USD&compact=ultra&date=${this.prevDate}`).pipe(take(1))
    .subscribe((currency: {USD_UAH: { [key: string]: number }, UAH_USD: { [key: string]: number }}) => {
      this.prevUAHCurrency = currency.USD_UAH[this.prevDate];
      this.prevUSDCurrency = currency.UAH_USD[this.prevDate];
    });
  }
}
