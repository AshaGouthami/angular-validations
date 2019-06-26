import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStepComponent } from './dialog-step.component';

describe('DialogStepComponent', () => {
  let component: DialogStepComponent;
  let fixture: ComponentFixture<DialogStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
