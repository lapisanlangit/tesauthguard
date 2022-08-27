import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { PasswordComponent } from './password/password.component';

const AdminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'password', component: PasswordComponent},
            { path: 'monitoring', component: MonitoringComponent},
        
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }
