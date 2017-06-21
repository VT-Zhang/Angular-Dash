import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: Http) {}
  
  private url = 'http://161.253.178.165:8080/api/posts';

  getData() {
    return this.http
    .get(this.url)
    .map(res => res.json());
  }
}

