import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client_profile',
  templateUrl: './client_profile.component.html',
  styleUrls: ['./client_profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  constructor() { }

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
