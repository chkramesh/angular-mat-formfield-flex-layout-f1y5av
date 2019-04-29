import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  styles : [
    `form {
      padding : 30px;
    }`
  ],
  template:`
    <form fxLayout="column" [formGroup]="contactForm">

      <div class="input-row" fxLayout="row" fxLayout.lt-sm="column" fxLayoutGap="20px" fxLayoutGap.lt-md="10px">

        <mat-form-field fxFlex="300px">
          <input matInput type="text" placeholder="FIRSTNAME" formControlName="firstName">
        </mat-form-field>

        <mat-form-field fxFlex="300px">
          <input matInput type="text" placeholder="LASTNAME" formControlName="lastName">
        </mat-form-field>

         <mat-form-field fxFlex="300px">
          <input matInput  type="text"  placeholder="EMAIL" formControlName="email">
        </mat-form-field>
      </div>

     

      <div class="input-row">
        <mat-form-field fxFlex>
          <input matInput  type="text"  placeholder="EMAIL" formControlName="email">
        </mat-form-field>
      </div>
    </form>
  `
})
export class AppComponent  { 
  contactForm : FormGroup;

  constructor(private fb: FormBuilder){
    this.contactForm = fb.group({
      firstName : '',
      lastName : '',
      email : ''
    });
  }

}