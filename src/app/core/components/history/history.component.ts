import { ChangeDetectionStrategy, Component } from '@angular/core';
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

  constructor() {}

  onLoadHisotry(): void {

  }
}
