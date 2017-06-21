import { Injectable } from '@angular/core';
import { Http, Jsonp, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  private url = 'https://crm.zoho.com/crm/private/json/Accounts/getRecords?authtoken=1c6859a3bbc0b776b49d71c4f68d87f8&scope=crmapi&callback=JSONP_CALLBACK';
  
  constructor(private jsonp:Jsonp) { }

  getData(){
    return this.jsonp.get(this.url)
    .map(this.extractData)
    .catch(this.handleError); 
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log('extracting data');
    return body ;
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error('err' + errMsg); // log to console instead
    return Observable.throw(errMsg);
    }
}
