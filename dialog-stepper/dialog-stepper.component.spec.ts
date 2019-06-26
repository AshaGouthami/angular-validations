import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStepperComponent } from './dialog-stepper.component';

describe('DialogStepperComponent', () => {
  let component: DialogStepperComponent;
  let fixture: ComponentFixture<DialogStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
