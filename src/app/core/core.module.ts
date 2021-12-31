import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
    declarations: [DashboardComponent, HistoryComponent],
    imports: [
        SharedModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatSnackBarModule,
        MatButtonToggleModule,
        CommonModule
    ]
})
export class CoreModule {}
