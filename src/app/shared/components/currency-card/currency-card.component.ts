import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {
  @Input() public currentUAHCurrency = 0;
  @Input() public currencyTitle = '';
  @Input() public currencyDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
