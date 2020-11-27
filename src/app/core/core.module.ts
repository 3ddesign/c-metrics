import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [DashboardComponent, MenuComponent],
  imports: [
    RouterModule,
    SharedModule,
    MatMenuModule,
    MatSnackBarModule,
    MatToolbarModule,
    CommonModule
  ]
})
export class CoreModule { }
