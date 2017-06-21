import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  patients = [
    {
      'id': '1',
      'id_name': 'PAT0845332',
      'first_name': 'Alex',
      'last_name': 'Gaines',
      'birthday': '05/14/1998',
      'gender':'Male',
      'phone': '703-288-9953',
      'fax': '703-288-9955',
      'email': 'info@inova.org',
      'street': '567 Cherry Ave',
      'city': 'Sterling',
      'state': 'VA',
      'zipcode': '20165',
    },
    {
      'id': '1',
      'id_name': 'PAT0845331',
      'first_name': 'Benjamin',
      'last_name': 'Franklin',
      'gender':'Male',      
      'birthday': '02/15/1992',
      'phone': '571-265-3421',
      'fax': '571-265-3425',
      'email': 'ben@gmail.com',
      'street': '354 Second Street',
      'city': 'Sterling',
      'state': 'VA',
      'zipcode': '20165',
    }
  ]
}
