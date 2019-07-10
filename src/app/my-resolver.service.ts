import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyResolverService implements Resolve<Observable<string>> {

  constructor() { }

  resolve() {
    return of('Hello').pipe(delay(2000));
  }
}
