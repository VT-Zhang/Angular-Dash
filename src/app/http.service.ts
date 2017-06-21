import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: Http) {}
  
  private url = "http://127.0.0.1:8000/api/zohocrm";

  getZohoID() {
    return this.http
    .get(this.url)
    .map(res => res.json());
  }
}

