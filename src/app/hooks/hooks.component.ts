import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit {
  data = 'hhohohohoho hihihih';
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.data = 'changed!!!', 5000)
  }

}
