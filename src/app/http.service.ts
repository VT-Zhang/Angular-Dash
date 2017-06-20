import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getClient() {
    return this.http.get('https://crm.zoho.com/crm/private/json/Accounts/getRecords?authtoken=1c6859a3bbc0b776b49d71c4f68d87f8&scope=crmapi')
    .map((res:Response) => res.json());
  }
}

