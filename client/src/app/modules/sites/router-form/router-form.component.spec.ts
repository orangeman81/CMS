import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterFormComponent } from './router-form.component';

describe('RouterFormComponent', () => {
  let component: RouterFormComponent;
  let fixture: ComponentFixture<RouterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
