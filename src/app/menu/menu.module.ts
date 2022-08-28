import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SatkerComponent } from './satker/satker.component';
import { KppnComponent } from './kppn/kppn.component';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { AdminGuard } from '../guards/admin.guard';
import { ListdataComponent } from './listdata/listdata.component';
import { GrafikComponent } from './dashboard/grafik/grafik.component';
import { HighlightDirective } from './satker/highlight.directive';
import { BetterHighlightDirective } from './satker/better-highlight.directive';
import { AnaksatkerComponent } from './satker/anaksatker/anaksatker.component';
import { AnaksatkerService } from './satker/anaksatker/anaksatker.service';



@NgModule({
  declarations: [
    DashboardComponent,
    SatkerComponent,
    KppnComponent,
    MenuComponent,
    ListdataComponent,
    GrafikComponent,
    HighlightDirective,
    BetterHighlightDirective,
    AnaksatkerComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  providers:[AdminGuard,AnaksatkerService]
})
export class MenuModule { }
