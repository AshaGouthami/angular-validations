import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogStepComponent } from '../dialog-step/dialog-step.component';
@Component({
  selector: 'app-dialog-stepper',
  templateUrl: './dialog-stepper.component.html',
  styleUrls: ['./dialog-stepper.component.css']
})
export class DialogStepperComponent implements OnInit {

  constructor(public dialog: MatDialog ) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogStepComponent, {
      width: '80%',
      height:'80%'
    });

    dialogRef.afterClosed().subscribe(
      result => {
        
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
  }

}
