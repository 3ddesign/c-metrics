import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
 
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, MenuComponent],
  imports: [
    SharedModule,
    MatMenuModule,
    MatSnackBarModule,
    MatToolbarModule,
    CommonModule
  ]
})
export class CoreModule { }
