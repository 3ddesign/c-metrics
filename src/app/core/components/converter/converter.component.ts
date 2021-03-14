import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'cmx-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {

  constructor(private apiService: ApiService) {}

  public convertedValue!: number;

  onContertValue() {

  }

}
