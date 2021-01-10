import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { InfoComponent } from './core/components/info/info.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
}, {
  path: 'info',
  component: InfoComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
