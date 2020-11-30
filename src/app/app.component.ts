import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

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
  constructor(private swUpdate: SwUpdate) {}

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
          if (confirm('New version available. Load New Version?'))  {
            window.location.reload();
          }
      });
    }
  }
}
