import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
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
