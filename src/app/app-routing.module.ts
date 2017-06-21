import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component'; // <-
import { PatientNewComponent } from './patient-new/patient-new.component'; // <-
import { ClientNewComponent } from './client-new/client-new.component'; // <-


const routes: Routes = [
    {path:'dashboard', component: DashboardComponent},
    {path:'client/profile', component: ClientProfileComponent},
    {path:'doctor/profile', component: DoctorProfileComponent},
    {path:'patient/profile', component: PatientProfileComponent},
    {path:'new/new_patient', component: PatientNewComponent},
    {path:'new/new_client', component: ClientNewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }