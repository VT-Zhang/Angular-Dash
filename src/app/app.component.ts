import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Aperiomics Dashboard';
  users = [];
  user = new User();
  submitted: boolean = false;
  register(){
    this.users.push(this.user);
    console.log(this.users);
    this.user = new User();
    this.submitted = true;
  }
}
