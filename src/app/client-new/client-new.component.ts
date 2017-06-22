import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {
  public data: object;
  public zoho: object =
    {
      name: "",
      phone: "",
      fax: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    };

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService
    .getZohoID()
    .subscribe(data => this.data = data)
  }

  onChange(id){
    this.httpService
    .getZohoAccount(id)
    .subscribe(zoho => this.zoho = zoho)
  }


}
