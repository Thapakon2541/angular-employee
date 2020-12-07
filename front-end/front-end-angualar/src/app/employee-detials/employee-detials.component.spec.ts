import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetialsComponent } from './employee-detials.component';

describe('EmployeeDetialsComponent', () => {
  let component: EmployeeDetialsComponent;
  let fixture: ComponentFixture<EmployeeDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
