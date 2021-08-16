import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

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
