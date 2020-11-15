import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
  <div class="sk-chase">
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
  </div>
`,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {}
