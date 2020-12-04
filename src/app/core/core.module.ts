import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [DashboardComponent, InfoComponent],
  imports: [
    SharedModule,
    MatTableModule,
    MatSnackBarModule,
    CommonModule
  ]
})
export class CoreModule { }
