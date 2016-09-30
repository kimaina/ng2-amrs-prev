import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

// analytics
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/src/providers/angulartics2-google-analytics';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
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
import { MainModule } from './main/main.module';
import { PatientSearchComponent } from './patient-search/patient-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    PatientSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    Angulartics2Module.forRoot(),
    MainModule,
    routing
  ],
  providers: [
     Angulartics2GoogleAnalytics
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
