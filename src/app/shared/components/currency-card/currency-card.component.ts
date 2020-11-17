import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyCardComponent {
  @Input() public currentCurrency = 0;
  @Input() public currencyTitle = '';
  @Input() public currencyDate = null;
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
