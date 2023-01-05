import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { RouterModule } from '@angular/router';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
    declarations: [CurrencyCardComponent, LoaderComponent, MenuComponent],
    imports: [MatMenuModule, MatCardModule, RouterModule, CommonModule],
    exports: [CurrencyCardComponent, LoaderComponent, MenuComponent]
})
export class SharedModule {}
