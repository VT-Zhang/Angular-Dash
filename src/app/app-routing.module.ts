import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientProfileComponent } from './client_profile/client_profile.component'; // <-


const routes: Routes = [
    {path:'dashboard', component: DashboardComponent},
    {path:'client/profile', component: ClientProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }