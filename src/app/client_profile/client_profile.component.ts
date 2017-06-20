import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-client_profile',
  templateUrl: './client_profile.component.html',
  styleUrls: ['./client_profile.component.css']
})

export class ClientProfileComponent implements OnInit {

  constructor(private HttpService: HttpService,
              private http: Http) { }

  result = {};

  loadClient(){
    this.http.get('https://crm.zoho.com/crm/private/json/Accounts/getRecords?authtoken=1c6859a3bbc0b776b49d71c4f68d87f8&scope=crmapi')
    .map(response => response.json())
    .subscribe(result => this.result = result);
  }


  ngOnInit() {
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
