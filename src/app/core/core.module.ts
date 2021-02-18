import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistoryComponent } from './components/history/history.component';
import { BudgetComponent } from './components/budget/budget.component';


@NgModule({
  declarations: [DashboardComponent, HistoryComponent, BudgetComponent],
  imports: [
    SharedModule,
    MatTableModule,
    MatSnackBarModule,
    CommonModule
  ]
})
export class CoreModule { }
