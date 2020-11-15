import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { MatCardModule } from '@angular/material/card';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [CurrencyCardComponent, LoaderComponent],
  imports: [
    MatCardModule,
    CommonModule
  ],
  exports: [CurrencyCardComponent, LoaderComponent]
})
export class SharedModule { }
