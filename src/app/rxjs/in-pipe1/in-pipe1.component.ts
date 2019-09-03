import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import {
  map,
  flatMap,
  tap,
  mapTo,
  switchMapTo,
  concatMapTo,
  switchMap,
  mergeMap,
  delay,
  concatMap,
  exhaustMap,
  take,
} from 'rxjs/operators';
import { of, interval } from 'rxjs';

@Component({
  selector: 'app-in-pipe1',
  templateUrl: './in-pipe1.component.html',
  styleUrls: ['./in-pipe1.component.scss'],
})
export class InPipe1Component implements OnInit {
  // map, flatMap, switchMap, mergeMap, concatMap, exaustMap, mapTo, switchMapTo, concatMapTo
  constructor(private beerService: BeerService) {}

  ngOnInit() {
    // this.mapAndFlatMapExample().subscribe(console.log);
    // this.switchMapExample().subscribe(console.log);
    // this.mergeMapExample().subscribe(console.log);
    // this.mapToExample().subscribe(console.log);
    // this.switchMapToExample().subscribe(console.log);
    // this.concatMapToExample().subscribe(console.log)
    // this.concatMapVSmergeMap();
    // this.exhaustMapExample().subscribe(console.log);
  }

  mapAndFlatMapExample() {
    // it return array, not a single records
    return this.beerService.getSomeData(10, 0).pipe(
      flatMap((b: any, i: number) => {
        console.log(b);
        return b;
      }),
      map((beer: any) => beer.name),
    );
  }

  switchMapExample() {
    // switchMap switche to other observable, on each emmision, previous observable is cancelled
    // switchMap in RxJS only cares about the latest value that the observable emitted,
    // for example cancelling any previous HTTP requests that were still in progress.
    const observable$ = interval(2000);

    return observable$.pipe(
      switchMap(beers => this.beerService.getSomeData(beers + 1, 0)),
    );
  }

  mergeMapExample() {
    // mergeMap allows for multiple inner subscriptions to be active at a time
    // Note that if order must be maintained concatMap is a better option.
    const observable$ = of(1);
    return observable$.pipe(
      mergeMap(val => this.beerService.getSomeData(val + 1, 0)),
    );
  }

  concatMapVSmergeMap() {
    // emit delay value
    const source = of(2000, 1000);
    // map value from source into inner observable, when complete emit result and move to next
    const example = source.pipe(
      concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val))),
    );
    const subscribe = example.subscribe(val =>
      console.log(`With concatMap: ${val}`),
    );

    // showing the difference between concatMap and mergeMap
    const mergeMapExample = source
      .pipe(
        // just so we can log this after the first example has run
        delay(5000),
        mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val))),
      )
      .subscribe(val => console.log(`With mergeMap: ${val}`));
  }

  exhaustMapExample() {
    const one = this.beerService.getSomeData(2, 1000);
    const two = this.beerService.getSomeData(3, 2000);

    return one.pipe(exhaustMap(value => two));
  }

  mapToExample() {
    // mapTo maps every emiision to constant
    return this.beerService.getSomeData(10, 0).pipe(mapTo('xdd'));
  }

  switchMapToExample() {
    // switchMapTo waits for observable to finish, and then map it into another observable
    const observable$ = of(1);
    return this.beerService
      .getSomeData(10, 2000)
      .pipe(switchMapTo(observable$));
  }

  concatMapToExample() {
    // concatMapTo subscribe to provided observable when previous emits or complete
    const observable$ = interval(2000);
    return observable$.pipe(concatMapTo(this.beerService.getSomeData(1, 0)));
  }
}
