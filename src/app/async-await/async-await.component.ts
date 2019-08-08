import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss'],
})
export class AsyncAwaitComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.getValueWithPromise();
    this.getValueWithAsync();
  }

  resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  getValueWithPromise() {
    this.resolveAfter2Seconds(20).then(value => {
      console.log(`promise result: ${value}`);
    });
    console.log('I will not wait until promise is resolved');
  }
  async getValueWithAsync() {
    const value = await this.resolveAfter2Seconds(20);
    console.log(`async result: ${value}`);
    console.log('I had to wait 2 seconds :(');
  }
}
