import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestResolveComponent } from './test-resolve.component';

describe('TestResolveComponent', () => {
  let component: TestResolveComponent;
  let fixture: ComponentFixture<TestResolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestResolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
