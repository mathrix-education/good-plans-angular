import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodPlanComponent } from './good-plan.component';

describe('GoodPlanComponent', () => {
  let component: GoodPlanComponent;
  let fixture: ComponentFixture<GoodPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
