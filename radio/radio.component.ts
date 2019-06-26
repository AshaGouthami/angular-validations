import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  matForm: FormGroup;
  static: boolean = false;
  dynamic: boolean = false;
  regex = '^[0-9]{10}$';
  Name;


  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.matForm = this.fb.group({
      firstName: [null, Validators.compose([ Validators.required, Validators.pattern(/^[A-Za-z]+$/)])],
      password: [null, Validators.required],
      value: ['S', Validators.required],
      Name: [null],
      id: [null, Validators.required],
      mobileNumber: [null],
      bloodgroup: [null, Validators.required],
      mobileNumber1: [null],
      alternate_mobileNumber: [null],
      emailid: [null],
      alternate_emailid: [null],
    });
  }

  selectionChange(_value) {
    console.log("this.matForm.value",this.matForm.value.value)
    if (this.matForm.value.value == 'S') {
      console.log("Static==>");

      this.static=true;
      this.dynamic=false;


      this.matForm.get('Name').setValue(null);
      this.matForm.get('Name').clearValidators();
      this.matForm.get('Name').updateValueAndValidity();
      this.matForm.get('Name').setValidators(Validators.compose([Validators.required,Validators.pattern(/^[A-Za-z]+$/)]));

 
      this.matForm.get('id').setValue(null);
      this.matForm.get('id').clearValidators();
      this.matForm.get('id').updateValueAndValidity();
      this.matForm.get('id').setValidators(Validators.required);


      this.matForm.get('mobileNumber').setValue(null);
      this.matForm.get('mobileNumber').clearValidators();
      this.matForm.get('mobileNumber').updateValueAndValidity();
      this.matForm.get('mobileNumber').setValidators(Validators.compose([Validators.required, Validators.pattern(this.regex)]));


      this.matForm.get('bloodgroup').setValue(null); 
      this.matForm.get('bloodgroup').clearValidators();
      this.matForm.get('bloodgroup').updateValueAndValidity();
      this.matForm.get('bloodgroup').setValidators(Validators.required);

    //   this.matForm.get('mobileNumber1').setValue(null);
    //   this.matForm.get('mobileNumber1').clearValidators();
    //   this.matForm.get('mobileNumber1').updateValueAndValidity();

    //   this.matForm.get('alternate_mobileNumber').setValue(null);
    //   this.matForm.get('alternate_mobileNumber').clearValidators();
    //   this.matForm.get('alternate_mobileNumber').updateValueAndValidity();

    //   this.matForm.get('emailid').setValue(null);
    //   this.matForm.get('emailid').clearValidators();
    //  this.matForm.get('emailid').updateValueAndValidity();

    //   this.matForm.get('alternate_emailid').setValue(null);
    //   this.matForm.get('alternate_emailid').clearValidators();
    //   this.matForm.get('alternate_emailid').updateValueAndValidity();


    } else {
      
      console.log("Dynamic==>");

      this.static=false;
      this.dynamic=true;
    
      this.matForm.get('mobileNumber1').setValue(null);
      this.matForm.get('mobileNumber1').clearValidators();
      this.matForm.get('mobileNumber1').updateValueAndValidity();
      this.matForm.get('mobileNumber1').setValidators(Validators.compose([Validators.required, Validators.pattern(this.regex)]));


      this.matForm.get('alternate_mobileNumber').setValue(null);
      this.matForm.get('alternate_mobileNumber').clearValidators();
      this.matForm.get('alternate_mobileNumber').updateValueAndValidity();
      this.matForm.get('alternate_mobileNumber').setValidators(Validators.compose([Validators.required, Validators.pattern(this.regex)]));


      this.matForm.get('emailid').setValue(null);
      this.matForm.get('emailid').clearValidators();
     this.matForm.get('emailid').updateValueAndValidity();
     this.matForm.get('emailid').setValidators(Validators.compose([Validators.required,Validators.email]));


      this.matForm.get('alternate_emailid').setValue(null);
      this.matForm.get('alternate_emailid').clearValidators();
      this.matForm.get('alternate_emailid').updateValueAndValidity();
      this.matForm.get('alternate_emailid').setValidators(Validators.compose([Validators.required,Validators.email]))


      
      
      // this.matForm.get('Name').setValue(null);
      // this.matForm.get('Name').clearValidators();
      // this.matForm.get('Name').updateValueAndValidity();
 
      // this.matForm.get('id').setValue(null);
      // this.matForm.get('id').clearValidators();
      // this.matForm.get('id').updateValueAndValidity();

      // this.matForm.get('mobileNumber').setValue(null);
      // this.matForm.get('mobileNumber').clearValidators();
      // this.matForm.get('mobileNumber').updateValueAndValidity();

      // this.matForm.get('bloodgroup').setValue(null); 
      // this.matForm.get('bloodgroup').clearValidators();
      // this.matForm.get('bloodgroup').updateValueAndValidity();

    }
  }


  name;
  Id;
  Mobilenumber;
  Bloodgroup;
  Mobilenumber1;
  Alternate_Mobilenumber;
  Email;
  Alternate_Email;
  


  submit(){
    this.name=this.matForm.value.Name;
    this.Id=this.matForm.value.id;
    this.Mobilenumber=this.matForm.value.mobileNumber;
    this.Bloodgroup=this.matForm.value.bloodgroup;
    this.Mobilenumber1=this.matForm.value.bloodgroup;
    this.Alternate_Mobilenumber =this.matForm.value.Alternate_Mobilenumber;
    this.Email =this.matForm.value.Email;
    this.Alternate_Email=this.matForm.value.Alternate_Email;
  }



  keyPress1(event: any) {
    const pattern = /^[A-Za-z]+$/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  keyPress2(event: any) {
    const pattern = /^[A-Za-z]+$/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}