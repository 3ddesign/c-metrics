import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [DashboardComponent, MenuComponent],
  imports: [
    MatToolbarModule,
    MatCardModule,
    CommonModule
  ]
})
export class CoreModule { }
