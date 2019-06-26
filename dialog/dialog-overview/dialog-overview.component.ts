import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent implements OnInit {
  Form:FormGroup;

  languageList:any=['C','JAVA','ORACLE','ANGULAR','PYTHON','TESTING','HTML']

  constructor(private fb:FormBuilder, public dialogRef: MatDialogRef< DialogOverviewComponent>) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.Form=this.fb.group({
      Form:['' ,Validators.required]
    })
  }

}
