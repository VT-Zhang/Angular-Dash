import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DataService } from '../data.service';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})

export class ClientProfileComponent implements OnInit {

  public data: any;
  private errorMessage : any;
  public url1 = 'https://crm.zoho.com/crm/private/json/Accounts/getRecords?authtoken=1c6859a3bbc0b776b49d71c4f68d87f8&scope=crmapi&callback=JSONP_CALLBACK';
  public url2 = "https://jobs.github.com/positions.json?description=python&location=new+york&callback=JSONP_CALLBACK";
  public url3 = "http://api.worldbank.org/countries/us/indicators/SH.XPD.PRIV.ZS?date=2000:2002&format=jsonP&prefix=JSONP_CALLBACK";
  public url4 = "http://161.253.178.165:8080/api/posts&callback=JSONP_CALLBACK";

  constructor(private httpService: HttpService,
              private dataService: DataService) { 
  }
               
               
  ngOnInit() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin:', '*');
    headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  }

  loadData(){
    // this.HttpService
    // .getClient()
    this.dataService
    .getData(this.url2)
    .subscribe(
      data => this.data = data,
      error => this.errorMessage = error,
    );
  }

  loadHttp(){
    this.httpService
    .getData()
    .subscribe(data => this.data = data)
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
