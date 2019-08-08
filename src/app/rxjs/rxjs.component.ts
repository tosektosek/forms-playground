import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  catchError,
  filter,
  map,
  tap,
  reduce,
  skip,
  take,
  takeUntil,
  delay,
} from 'rxjs/operators';
import {
  throwError,
  of,
  interval,
  Subject,
  forkJoin,
  zip,
  combineLatest,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.getSomeData(11, 0)
      .pipe(
        tap(val => {
          return 'It is ignored';
        }),
        // tap(console.log),
        filter((beer: any) => beer.length > 10),
        map((b: any[]) => {
          return b.map(beer => ({ ...beer, name: `${beer.name} hohho` }));
        }),
        // tap(console.log),
        reduce((acc, value) => {
          console.log(`value:`);
          console.log(value);
          return acc;
        }, []),
      )
      .subscribe(console.log);
    // this.fork();
    // this.rxjsZip();
    // TODO: OGARNAC
    // this.rxjsCombineLatest()

    // proper reduce and map
    // of(1, 2, 3, 4)
    //   .pipe(
    //     map(each => each * 3), // 3 6 9 12
    //     reduce((acc, val) => val + acc, 0),
    //   )
    //   .subscribe(console.log);

    // same with async
    // const beers = (await this.getSomeData(11, 0).toPromise()) as Array<any>;
    // beers
    //   .filter((beer: any) => beer.length > 10)
    //   .map((beer: any) => ({ ...beer, name: `${beer.name} hohoho` }));
    // const abc = beers.reduce((previous: any, current, index, array) => {
    //   // console.log(previous)
    //   return previous + current.id;
    // }, 0);

    // console.log(abc);

    // this.getSomeDataWithError().subscribe();
  }

  getSomeData(perPage, d) {
    return this.http
      .get(`${url}/beers?page=1&per_page=${perPage}`)
      .pipe(delay(d));
  }

  getSomeDataWithError() {
    return this.http.get(`${url}/beersxxdxd`);
  }

  somePipes() {
    const interval$ = interval(1000); // 0--1--2--3--4--5--6...
    const new$ = interval$.pipe(
      takeUntil(this.destroy$),
      skip(1), // ---1--2--3--4--5--6...
      take(5), // ---1--2--3--4--5|
      filter(v => v % 2 === 0), // ------2-----4---|
      map(v => v + 1), // ------3-----5---|
    );
  }

  // forkjoin need observable to complete (observable.complete())
  // it's final destination operator
  fork() {
    forkJoin(
      this.getSomeData(1, 500),
      this.getSomeData(2, 0),
      this.getSomeData(3, 300),
    )
      .pipe(
        tap(val => {
          console.log(val);
        }),
      )
      .subscribe(console.log);
  }

  // zip waits until all observables emits data
  rxjsZip() {
    zip(
      this.getSomeData(1, 500),
      this.getSomeData(2, 0),
      this.getSomeData(3, 300),
    )
      .pipe(tap(val => console.log(val)))
      .subscribe(console.log);
  }

  rxjsCombineLatest() {
    combineLatest(
      this.getSomeData(1, 500),
      this.getSomeData(2, 0),
      this.getSomeData(3, 300),
    )
      .pipe(tap(val => console.log(val)))
      .subscribe(console.log);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

const url = 'https://api.punkapi.com/v2';
