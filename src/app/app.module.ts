import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TaskComponent } from './task/task.component';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from './post/post.component'; // <-

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
