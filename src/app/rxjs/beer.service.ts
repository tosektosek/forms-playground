import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

const url = 'https://api.punkapi.com/v2';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  getSomeData(perPage, d) {
    return this.http
      .get(`${url}/beers?page=1&per_page=${perPage}`)
      .pipe(delay(d));
  }

  getSomeDataWithError() {
    return this.http.get(`${url}/beersxxdxd`);
  }
}
