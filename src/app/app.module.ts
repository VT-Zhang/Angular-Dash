import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { HttpService } from './http.service';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientNewComponent } from './patient-new/patient-new.component';
import { ClientNewComponent } from './client-new/client-new.component'; // <-

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientProfileComponent,
    DoctorProfileComponent,
    PatientProfileComponent,
    PatientNewComponent,
    ClientNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule,
  ],
  providers: [
    HttpService,
    DataService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
