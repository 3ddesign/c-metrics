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
  public prevCurrency!: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCurrencySummary();
  }

  private getCurrencySummary(): void {
    this.apiService.getCurrency('/api/v7/convert?q=USD_UAH,UAH_USD&compact=ultra').pipe(take(1))
    .subscribe((currency: {USD_UAH: number, UAH_USD: number}) => {
      this.currentUAHCurrency = currency.USD_UAH;
      this.currentUSDCurrency = currency.UAH_USD;
    });
  }
}
