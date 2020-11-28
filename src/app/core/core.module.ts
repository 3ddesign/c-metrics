import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [DashboardComponent, InfoComponent],
  imports: [
    SharedModule,
    MatSnackBarModule,
    MatToolbarModule,
    CommonModule
  ]
})
export class CoreModule { }
