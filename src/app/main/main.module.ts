import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { dashboardRouting } from './main-routing';
import { MainComponent } from './main.component';
import { ClinicDashboardComponent } from '../clinic-dashboard/clinic-dashboard.component';
import { PatientDashboardComponent } from '../patient-dashboard/patient-dashboard.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    dashboardRouting
  ],
  declarations: [
    ClinicDashboardComponent,
    PatientDashboardComponent
  ],
  providers: [

  ]
})
export class MainModule { }
