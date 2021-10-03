import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { SubSink } from 'subsink';
import { ApiService } from './core/services/api.service';

@Component({
    selector: 'app-root',
    template: `
        <mat-toolbar>
            <span>Currency metrics</span>
            <cmx-menu></cmx-menu>
        </mat-toolbar>
        <router-outlet></router-outlet>
        <div *ngIf="!isConnected" class="connection-warning">
            No internet connection
        </div>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public isConnected = true;
    private subs = new SubSink();
    constructor(private apiService: ApiService, private connectionService: ConnectionService) {}

    ngOnInit(): void {
        this.checkNetworkStatus();
    }

    checkNetworkStatus(): void {
        this.subs.add(
            this.connectionService.monitor().subscribe(isConnected => {
                this.apiService.isApplicationOnline = this.isConnected = isConnected;
            })
        );
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}
