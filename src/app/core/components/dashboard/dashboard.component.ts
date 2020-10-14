import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/internal/operators/take';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUAHCurrency: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCurrency('/api/v7/convert?q=USD_UAH,UAH_USD&compact=ultra').pipe(take(1)).subscribe(currency => {
      this.currentUAHCurrency = currency.USD_UAH;
      console.log(currency);
    });
  }

}
