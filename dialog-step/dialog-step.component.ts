import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-step',
  templateUrl: './dialog-step.component.html',
  styleUrls: ['./dialog-step.component.css']
})
export class DialogStepComponent implements OnInit {

  departmentList:['CSE','EEE','ECE','CIVIL','MECH']
  isLinear=false;
  firstformGroup: FormGroup;
  secondformGroup:FormGroup;
  thirdformGroup:FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.firstformGroup=this.formbuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      rollNumber: ['', Validators.required],
      collegeName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)] ],
      department: ['', Validators.required],
    });
  
  this.secondformGroup=this.formbuilder.group({
    firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    email: ['', [Validators.required,Validators.email]],
    mobileNumber: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
  });
  this.thirdformGroup=this.formbuilder.group({
    currentAddress:['',Validators.required],
    permanentAddress:['',Validators.required]
  })
}
keyPress1(event: any) {
  const pattern =/^[A-Za-z]+$/;
  let inputChar = String.fromCharCode(event.charCode);
  if (!pattern.test(inputChar)) {
      event.preventDefault();

  }
}
keyPress2(event: any) {
  const pattern =/^[A-Za-z]+$/;
  let inputChar = String.fromCharCode(event.charCode);
  if (!pattern.test(inputChar)) {
      event.preventDefault();

  }
}
keyPress3(event: any) {
  const pattern =/^[A-Za-z]+$/;
  let inputChar = String.fromCharCode(event.charCode);
  if (!pattern.test(inputChar)) {
      event.preventDefault();

  }
}
keyPress4(event: any) {
  const pattern =/^[A-Za-z]+$/;
  let inputChar = String.fromCharCode(event.charCode);
  if (!pattern.test(inputChar)) {
      event.preventDefault();

  }
}
keyPress5(event: any) {
  const pattern = /[0-9]/;
  let inputChar = String.fromCharCode(event.charCode);
  if (!pattern.test(inputChar)) {
      event.preventDefault();
  }
}
}
