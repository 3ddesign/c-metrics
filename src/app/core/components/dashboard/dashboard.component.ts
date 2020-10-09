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
  currentPrivatUAHCurrency: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCurrency('&currencies=UAH&source=USD&format=1').pipe(take(1)).subscribe(currency => {
      this.currentUAHCurrency = currency.quotes.USDUAH;
      console.log(currency);
    });

    this.apiService.getPrivatCurrency().pipe(take(1)).subscribe(privatCurrency => {
      console.log(privatCurrency);

    });
  }

}
