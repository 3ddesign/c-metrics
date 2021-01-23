import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener
} from '@angular/core';
import { DateTime } from 'luxon';
import { take } from 'rxjs/operators';
import { ICMetricsCurrencyData, ICMetricsUAHCurrencyResponce } from '../../interfaces/currency.interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  public isLoadingContent = true;
  public currencyData: ICMetricsCurrencyData  = {
    currentUAHCurrency: 0,
    currentUSDCurrency: 0,
    currentEURCurrency: 0,
    currentEURUAHCurrency: 0,
    prevEURCurrency: 0,
    prevEURUAHCurrency: 0,
    prevUAHCurrency: 0,
    prevUSDCurrency: 0
  }; 
  public currentDate = DateTime.local().toISODate();
  private prevDate = DateTime.local().minus({ days: 1 }).toISODate();
  private defaultTouch = { x: 0, y: 0, time: 0 };

  private readonly deltaInterval = 500;

  constructor(public apiService: ApiService, private cdr: ChangeDetectorRef) {
    this.getCurrencyData();
    this.getAddtionalData();
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('touchend', ['$event'])
  @HostListener('touchcancel', ['$event'])
  handleTouch(event: TouchEvent): void {
    const touch = event.touches[0] || event.changedTouches[0];
    if (event.type === 'touchstart') {
      this.defaultTouch.x = touch.pageX;
      this.defaultTouch.y = touch.pageY;
      this.defaultTouch.time = event.timeStamp;
    } else if (event.type === 'touchend') {
      const deltaY = touch.pageY - this.defaultTouch.y;
      const deltaTime = event.timeStamp - this.defaultTouch.time;
      if (deltaTime < this.deltaInterval) {
        if (Math.abs(deltaY) > 60) {
          if (deltaY > 0) {
            this.doSwipeDown();
          }
        }
      }
    }
  }

  private getCurrencyData(): void {
    this.isLoadingContent = true;
    this.apiService
      .getCurrency(
        `/api/v7/convert?q=USD_UAH,EUR_UAH&compact=ultra&date=${this.prevDate}&endDate=${this.currentDate}`
      )
      .pipe(take(1))
      .subscribe((currency: ICMetricsUAHCurrencyResponce) => {
        this.currencyData.currentUAHCurrency = currency.USD_UAH[this.currentDate];
        this.currencyData.currentEURCurrency = currency.EUR_UAH[this.currentDate];
        this.currencyData.prevUAHCurrency = currency.USD_UAH[this.prevDate];
        this.currencyData.prevEURCurrency = currency.EUR_UAH[this.prevDate];
        this.isLoadingContent = false;
        this.cdr.markForCheck();
      });
  }

  private getAddtionalData(): void {
    this.isLoadingContent = true;
    this.apiService
      .getCurrency(
        `/api/v7/convert?q=UAH_USD,UAH_EUR&compact=ultra&date=${this.prevDate}&endDate=${this.currentDate}`
      )
      .pipe(take(1))
      .subscribe((currency: ICMetricsUAHCurrencyResponce) => {
        this.currencyData.currentUSDCurrency = currency.UAH_USD[this.currentDate];
        this.currencyData.currentEURUAHCurrency = currency.UAH_EUR[this.currentDate];
        this.currencyData.prevEURUAHCurrency = currency.UAH_EUR[this.prevDate];
        this.currencyData.prevUSDCurrency = currency.UAH_USD[this.prevDate];
        this.isLoadingContent = false;
        this.cdr.markForCheck();
      });
  }

  private doSwipeDown(): void {
    this.getCurrencyData();
  }
}
