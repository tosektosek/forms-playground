import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private http: HttpClient) { }

  testGet() {
    console.log('Here from endpoint service')
    return this.http.get('http://xd.com/endpoint');
  }
}
