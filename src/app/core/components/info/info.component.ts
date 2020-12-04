import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'USD/UAH', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'USD/UAH', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'USD/UAH', weight: 6.941, symbol: 'Li'}
];

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
}
