import {HttpClient} from '@angular/common/http';


import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

const Segment = /^\/?(.*)\/?$/;

export interface DbItem {
  id: string;
}

@Injectable()
export class DataService<T extends DbItem> {

  private api = 'http://localhost:3001/';
  private url: string;

  constructor(url: string, private http: HttpClient) {
    let result = Segment.exec(url)[1];
    if (result && result[1]) this.url = this.api + result[1] + '/';
    else throw new Error('error creating data service. incorrect url parameter');
  }

  // getAll(): Observable<any[]> {
  //   return this.http.get(this.url);
  // }
  //
  // getById(id: string): Observable<any> {
  //   return this.http.get(this.url + id);
  // }
  //
  // getBy(query: {[U in keyof T]: string}): Observable<any> {
  //   let key   = Object.keys(query)[0];
  //   let value = query[key];
  //   return this.http.get(this.url + `${key}/${value}`);
  // }
  //
  // insert(item: any): Observable<any> {
  //   return this.http.post(`${this.url}/${item.id}`, item);
  // }
  //
  // replace(item: any): Observable<any> {
  //   return this.http.put(`${this.url}/${item.id}`, item);
  // }
  //
  // // update(item: T): Observable<T> {
  // //   return this.http.patch(`${this.url}/${item.id}`, item);
  // // }
  //
  // delete(item: any): Observable<string> {
  //   return this.http.delete(`${this.url}/${item.id}`);
  // }
}
