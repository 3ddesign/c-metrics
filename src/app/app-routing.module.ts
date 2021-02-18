import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetComponent } from './core/components/budget/budget.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { HistoryComponent } from './core/components/history/history.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
}, {
  path: 'history',
  component: HistoryComponent,
}, {
  path: 'budget',
  component: BudgetComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
