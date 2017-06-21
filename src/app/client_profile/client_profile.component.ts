import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DataService } from '../data.service';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-client_profile',
  templateUrl: './client_profile.component.html',
  styleUrls: ['./client_profile.component.css']
})

export class ClientProfileComponent implements OnInit {

  constructor(private HttpService: HttpService,
              private DataService: DataService) { }
               
               
  ngOnInit() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin:', '*');
    headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  }

  result = {};

  loadClient(){
    // this.HttpService
    // .getClient()
    this.DataService
    .getData()
    .subscribe(result => this.result = result);
  }



 

  clients = [
    {
      'id': '1',
      'type': 'Clinic',
      'name': 'Inova Hospital',
      'phone': '703-288-9953',
      'fax': '703-288-9955',
      'email': 'info@inova.org',
      'street': '123 Main Street',
      'city': 'Sterling',
      'state': 'VA',
      'zipcode': '20165',
    },
    {
      'id': '2',
      'type': 'Hospital',
      'name': 'GW Hospital',
      'phone': '703-288-9953',
      'fax': '703-288-9955',
      'email': 'info@gwu.edu',      
      'street': '456 Second Street',
      'city': 'Ashburn',
      'state': 'VA',
      'zipcode': '20170',
    }
  ]

}
