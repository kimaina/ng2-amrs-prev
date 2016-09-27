import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PatientInfoComponent } from './patient-dashboard/patient-info/patient-info.component';
import { PatientEncountersComponent } from './patient-dashboard/patient-encounters/patient-encounters.component';
import { DailyScheduleComponent } from './clinic-dashboard/daily-schedule/daily-schedule.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { ClinicDashboardComponent } from './clinic-dashboard/clinic-dashboard.component';

import {
routing,
appRoutingProviders
} from './app.routing';
import { DashboardModule } from './dashboard/dashboard.module';
import { PatientSearchComponent } from './patient-search/patient-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PatientSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    DashboardModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
