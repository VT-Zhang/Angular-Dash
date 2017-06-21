import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 public doctors = [
    {
      'id': '1',
      'first_name': 'Kobe',
      'last_name': 'Bryant',
      'department': 'Main',
      'specialty': 'Pediatrics',
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
      'first_name': 'Steven',
      'last_name': 'Curry',
      'department': 'Billing',
      'specialty': 'OBGYN',
      'phone': '571-376-3620',
      'fax': '571-376-3621',
      'email': 'scurry@abc.com',
      'street': '789 Walnut Street',
      'city': 'Ashburn',
      'state': 'VA',
      'zipcode': '20172',
    }
  ]
}
