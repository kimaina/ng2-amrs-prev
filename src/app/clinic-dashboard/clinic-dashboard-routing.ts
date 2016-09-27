import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';
const clinicDashboardRoutes: Routes = [
  { path: '', redirectTo: 'daily-schedule', pathMatch: 'full' },
  { path: 'daily-schedule', component: DailyScheduleComponent }
];
export const clinicDashboardRouting: ModuleWithProviders = RouterModule.forChild(clinicDashboardRoutes);
