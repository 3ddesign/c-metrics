import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyCardComponent {
  public isTrendGoDown = false;
  public currencyDayAgo!: number;
  @Input() public currentCurrency = 0;
  @Input() public currencyTitle = '';
  @Input() public currencyDate = null;

  @Input() public set prevCurrency(prevCurrency: number) {
    this.currencyDayAgo = prevCurrency;
    if (this.currentCurrency && prevCurrency) {
      this.defineCurrencyTrand(prevCurrency);
    }
  }

  private defineCurrencyTrand(prevCurrency: number): void {
    this.isTrendGoDown = this.currentCurrency < prevCurrency;
  }
}
