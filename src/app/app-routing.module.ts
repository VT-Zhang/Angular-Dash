import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { PostComponent } from './post/post.component'; // <-


const routes: Routes = [
    {path:'abc', component: TaskComponent},
    {path:'posts', component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }