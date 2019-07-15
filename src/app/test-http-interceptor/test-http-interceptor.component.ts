import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../endpoint.service';

@Component({
  selector: 'app-test-http-interceptor',
  templateUrl: './test-http-interceptor.component.html',
  styleUrls: ['./test-http-interceptor.component.scss']
})
export class TestHttpInterceptorComponent implements OnInit {

  constructor(private endpoint: EndpointService) { }

  ngOnInit() {
  }

  submit() {
    this.endpoint.testGet().subscribe(value => console.log(value));
  }

}
