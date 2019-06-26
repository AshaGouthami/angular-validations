import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';


export interface DATA{
  course:string;
  language:string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  Form:FormGroup;
  constructor(public dialog: MatDialog ,public fb:FormBuilder) {
  }
  ngOnInit(){
    this.Form=this.fb.group({
      firstName:['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)] ],
      lastName:['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)] ]
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(
      result => {   
      console.log('The dialog was closed');
    });
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
}

