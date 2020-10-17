import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CurrencyCardComponent],
  imports: [
    MatCardModule,
    CommonModule
  ]
})
export class SharedModule { }
