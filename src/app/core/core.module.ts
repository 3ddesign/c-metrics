import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [DashboardComponent, MenuComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
