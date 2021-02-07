import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubSink } from 'subsink';
import { ApiService } from '../../services/api.service';
import * as mockData from '../mock-data/report';
import { DateTime } from 'luxon';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent {
  dataSource = mockData.REPORT_DATA;
  historyData: string[] = ['date', 'currency', 'value'];

  private subs = new SubSink();

  constructor(public apiService: ApiService) {
    this.onLoadHisotry();
  }

  onLoadHisotry(): void {
    this.subs.add(
    this.apiService.getCurrencyHistory(`/api/v7/convert?q=USD_UAH&compact=ultra&date=${DateTime.local().minus({ days: 3 }).toISODate()}&endDate=${DateTime.local().toISODate()}`).subscribe(currencyHistory => {
      console.log(currencyHistory);
    }));
  }
}
