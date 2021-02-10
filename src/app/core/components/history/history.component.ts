import { Component, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { ApiService } from '../../services/api.service';
import * as mockData from '../mock-data/report';
import { DateTime } from 'luxon';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnDestroy {
  dataSource!: { date: string, currency: string, value: number }[];
  historyData: string[] = ['date', 'currency', 'value'];

  private subs = new SubSink();
  private daysAmount: { days: number } = { days: 8 };
  private mainCurrencyPair = 'USD_UAH';

  constructor(public apiService: ApiService) {
    this.onLoadHisotry();
  }

  onLoadHisotry(): void {
    this.subs.add(
    this.apiService.getCurrencyHistory(`/api/v7/convert?q=USD_UAH&compact=ultra&date=${DateTime.local().minus(this.daysAmount).toISODate()}&endDate=${DateTime.local().toISODate()}`).subscribe((currencyHistory: any) => {
      this.dataSource = [];
      for (const date in currencyHistory[this.mainCurrencyPair]) {
        this.dataSource.push({ date: date, currency: 'USD/UAH', value: currencyHistory[this.mainCurrencyPair][date] });
      }
    }));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
