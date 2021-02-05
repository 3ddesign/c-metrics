import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import * as mockData from '../mock-data/report';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent {
  dataSource = mockData.REPORT_DATA;
  historyData: string[] = ['date', 'currency', 'value'];

  constructor(public apiService: ApiService) {}

  onLoadHisotry(): void {
    // this.apiService.getCurrencyHistory().subscribe();
  }
}
