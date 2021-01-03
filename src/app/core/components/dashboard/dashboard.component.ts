import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
} from '@angular/core';
import { take } from 'rxjs/operators';
import { ICMetricsUAHCurrencyResponce } from '../../interfaces/currency.interfaces';
import { ApiService } from '../../services/api.service';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  public isLoadingContent = true;
  public currentUAHCurrency!: number;
  public currentUSDCurrency!: number;
  public currentEURCurrency!: number;
  public currentEURUAHCurrency!: number;
  public prevEURCurrency!: number;
  public prevEURUAHCurrency!: number;
  public prevUAHCurrency!: number;
  public prevUSDCurrency!: number;
  public currentDate = `${new Date().getFullYear()}-${this.addZero(
    new Date().getMonth() + 1
  )}-${this.addZero(new Date().getDate())}`;
  private prevDate = `${new Date().getFullYear()}-${this.addZero(
    new Date().getMonth() + 1
  )}-${this.addZero(new Date().getDate() - 1)}`;
  private defaultTouch = { x: 0, y: 0, time: 0 };

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
      if (deltaTime < 500) {
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
        this.currentUAHCurrency = currency.USD_UAH[this.currentDate];
        this.currentEURCurrency = currency.EUR_UAH[this.currentDate];
        this.prevUAHCurrency = currency.USD_UAH[this.prevDate];
        this.prevEURCurrency = currency.EUR_UAH[this.prevDate];
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
        this.currentUSDCurrency = currency.UAH_USD[this.currentDate];
        this.currentEURUAHCurrency = currency.UAH_EUR[this.currentDate];
        this.prevEURUAHCurrency = currency.UAH_EUR[this.prevDate];
        this.prevUSDCurrency = currency.UAH_USD[this.prevDate];
        this.isLoadingContent = false;
        this.cdr.markForCheck();
      });
  }

  private addZero(date: number): string | number {
    return date.toString().length === 1 ? '0' + date : date;
  }

  private doSwipeDown(): void {
    this.getCurrencyData();
  }
}
