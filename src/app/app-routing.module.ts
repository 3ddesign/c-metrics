import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConverterComponent } from './core/components/converter/converter.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { HistoryComponent } from './core/components/history/history.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
}, {
  path: 'history',
  component: HistoryComponent,
}, {
  path: 'converter',
  component: ConverterComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
