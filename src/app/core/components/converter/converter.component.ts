import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'cmx-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {

  constructor(private stateService: StateService) {}

  public convertedValue!: number;

  onContertValue(value: string): void {
    console.log(value);
  }
}
