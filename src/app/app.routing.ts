import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component.ts';
import { LoginComponent } from './login/login.component.ts';
import { ClinicDashboardComponent } from './clinic-dashboard/clinic-dashboard.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
const dashboardRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'patient-search', component: ClinicDashboardComponent }
    ]
  }
];
const appRoutes: Routes = [
  { path: '', redirectTo: 'patient-search', pathMatch: 'full' },
  ...dashboardRoutes,
  { path: 'login', component: LoginComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
