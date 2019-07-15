import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHttpInterceptorComponent } from './test-http-interceptor.component';

describe('TestHttpInterceptorComponent', () => {
  let component: TestHttpInterceptorComponent;
  let fixture: ComponentFixture<TestHttpInterceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHttpInterceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHttpInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
