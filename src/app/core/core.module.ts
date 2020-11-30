import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [DashboardComponent, InfoComponent],
  imports: [
    SharedModule,
    MatSnackBarModule,
    CommonModule
  ]
})
export class CoreModule { }
