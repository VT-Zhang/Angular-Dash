import { Injectable } from '@angular/core';
import { Http, Jsonp, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  constructor(private jsonp:Jsonp) { }

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
  
  getData(url){
    return this.jsonp.get(url)
    .map(this.extractData)
    .catch(this.handleError); 
  }
  
}
