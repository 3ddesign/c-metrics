import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ConnectionService } from 'ng-connection-service';
import { ApiService } from './core/services/api.service';

@Component({
  selector: "app-root",
  template: ` <mat-toolbar>
      <span>Currency metrics</span>
      <app-menu></app-menu>
    </mat-toolbar>
    <router-outlet></router-outlet>
    <div *ngIf="!isConnected" class="connection-warning">
      No internet connection
    </div>`,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public isConnected = true;
  constructor(
    private swUpdate: SwUpdate,
    private apiService: ApiService,
    private connectionService: ConnectionService
  ) {}

  ngOnInit(): void {
    this.checkNetworkStatus();
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      });
    }
  }

  checkNetworkStatus(): void {
    this.connectionService.monitor().subscribe((isConnected) => {
      this.apiService.isApplicationOnline = this.isConnected = isConnected;
    });
  }
}
