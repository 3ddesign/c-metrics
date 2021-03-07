import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistoryComponent } from './components/history/history.component';
import { ConverterComponent } from './components/converter/converter.component';


@NgModule({
  declarations: [DashboardComponent, HistoryComponent, ConverterComponent],
  imports: [
    SharedModule,
    MatTableModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    CommonModule
  ]
})
export class CoreModule { }
