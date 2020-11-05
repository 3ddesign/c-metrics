import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent {
  @Input() public currentCurrency = 0;
  @Input() public currencyTitle = '';
  @Input() public currencyDate = new Date();
  public isTrendGoDown = false;

  @Input() public set prevCurrency(prevCurrency: number) {
    if (this.currentCurrency && prevCurrency) {
      this.defineCurrencyTrand(prevCurrency);
    }
  }

  constructor() { }

  private defineCurrencyTrand(prevCurrency: number): void {
    this.isTrendGoDown = this.currentCurrency < prevCurrency;
  }

}
