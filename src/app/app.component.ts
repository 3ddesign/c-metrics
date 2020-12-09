import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ConnectionService } from 'ng-connection-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
       <span>Currency metrics</span>
       <app-menu></app-menu>
    </mat-toolbar>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private isConnected = true;
  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar, private connectionService: ConnectionService) {}

  ngOnInit(): void {
    this.checkNetworkStatus();
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
          if (confirm('New version available. Load New Version?'))  {
            window.location.reload();
          }
      });
    }
  }

  checkNetworkStatus(): void {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
      }
      else {
        this.snackBar.open('No internet connection.', '', {
          duration: 4000,
        });
      }
    })
  }
}
