import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as mockData from '../mock-data/report';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent {
  displayedColumns: string[] = ['position', 'currency', 'value'];
  dataSource = mockData.REPORT_DATA;
}
