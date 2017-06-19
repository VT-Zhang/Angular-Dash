import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Aperiomics Dashboard';
  number = 10;
  name = 'Jason Zhang';
  user = {
    first_name: 'Bill',
    last_name: 'Gates',
  }
  x: number = 7;
  num: number = 1;
  today = new Date();
  arr = [1,2,3,4,5];
  boo = true;

  logNum(){
    this.num += 1;
    console.log('num is: ', this.num);
  }

  users = [];
  user1 = {
    email: ''
  };
  onSubmit(){
    this.users.push(this.user2);
    this.user2 = new User();
  }

  user2 = new User();

  
}
