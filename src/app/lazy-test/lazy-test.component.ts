import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-test',
  templateUrl: './lazy-test.component.html',
  styleUrls: ['./lazy-test.component.scss']
})
export class LazyTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('LazyTestComponent was loaded')
  }

}
