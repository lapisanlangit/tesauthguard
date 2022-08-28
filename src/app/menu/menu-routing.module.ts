import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KppnComponent } from './kppn/kppn.component';
import { MenuComponent } from './menu.component';
import { SatkerComponent } from './satker/satker.component';

const MenuRoutes: Routes = [
    {
        path: '',
        component: MenuComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'satker', component: SatkerComponent},
            { path: 'kppn', component: KppnComponent},
            {
                path: 'admin',
                // canActivate: [AdminGuard],
                loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule),
              },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(MenuRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MenuRoutingModule { }
