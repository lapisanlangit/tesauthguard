import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SatkerComponent } from './satker/satker.component';
import { KppnComponent } from './kppn/kppn.component';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { AdminGuard } from '../guards/admin.guard';



@NgModule({
  declarations: [
    DashboardComponent,
    SatkerComponent,
    KppnComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  providers:[AdminGuard]
})
export class MenuModule { }
