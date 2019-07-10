import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-resolve',
  templateUrl: './test-resolve.component.html',
  styleUrls: ['./test-resolve.component.scss']
})
export class TestResolveComponent implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // setTimeout(()=> {
    //   this.data = 'I was added with timeot'
    // }, 2000);
    console.log(this.route.snapshot.data)
    this.data = this.route.snapshot.data.data;
  }

}
