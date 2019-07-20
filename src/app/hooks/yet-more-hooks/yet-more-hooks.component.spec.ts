import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YetMoreHooksComponent } from './yet-more-hooks.component';

describe('YetMoreHooksComponent', () => {
  let component: YetMoreHooksComponent;
  let fixture: ComponentFixture<YetMoreHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YetMoreHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YetMoreHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
