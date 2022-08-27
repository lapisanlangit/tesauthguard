import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { PasswordComponent } from './password/password.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MonitoringComponent } from './monitoring/monitoring.component';



@NgModule({
  declarations: [AdminComponent,PasswordComponent, MonitoringComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
