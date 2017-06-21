import { Injectable } from '@angular/core';
import { Http, Response, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: Http, 
              private jsonp: Jsonp) {}
  
  private url = 'https://crm.zoho.com/crm/private/json/Accounts/getRecords?authtoken=1c6859a3bbc0b776b49d71c4f68d87f8&scope=crmapi&prefix=JSONP_CALLBACK';

  createHeader(){
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin:', '*');
    headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  }

  getClient() {
    return this.jsonp
    .get(this.url)
    .map(res => res.json());
  }
}

