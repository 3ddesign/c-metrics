import { Component } from '@angular/core';

export interface PeriodicElement {
  currency: string;
  position: number;
  value: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, currency: 'USD/UAH', value: 1.0079 },
  { position: 2, currency: 'USD/UAH', value: 4.0026 },
  { position: 3, currency: 'USD/UAH', value: 6.941 },
];

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  displayedColumns: string[] = ['position', 'currency', 'value'];
  dataSource = ELEMENT_DATA;
}
