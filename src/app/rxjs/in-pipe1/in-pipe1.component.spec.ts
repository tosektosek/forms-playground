import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPipe1Component } from './in-pipe1.component';

describe('InPipe1Component', () => {
  let component: InPipe1Component;
  let fixture: ComponentFixture<InPipe1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPipe1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPipe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
