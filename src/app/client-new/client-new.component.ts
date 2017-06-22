import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {
  public data: any;
  public zoho_id: string;
  public url : string = "http://127.0.0.1:8000/api/zohocrm/";
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

  constructor(private httpService: HttpService,
              private http: Http) { }

  ngOnInit() {
    this.httpService
    .getZohoID()
    .subscribe(data => this.data = data)
  }

  // importData(){
  //   console.log(this.url+this.zoho_id);
  //   this.http
  //   .get(this.url+this.zoho_id)
  //   .map(res => res.json())
  //   .subscribe(zoho => this.zoho = zoho)
  // }

  onChange(id){
    this.zoho_id = id;
    this.http
    .get(this.url+this.zoho_id)
    .map(res => res.json())
    .subscribe(zoho => this.zoho = zoho)
  }


}
