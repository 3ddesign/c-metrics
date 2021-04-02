import { Component } from '@angular/core';

@Component({
    selector: 'cmx-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
    constructor() {}

    public convertedValue!: number;

    onContertValue(value: string): void {
        console.log(value);
    }
}
