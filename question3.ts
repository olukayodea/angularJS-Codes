import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent implements OnInit {
  oldValue: string = null;


  loginForm = this.fb.group({
    otp: ['', Validators.required]
  });
  
  get otp() { return this.loginForm.get('otp'); }

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formControlValueChanged();
  }

  formControlValueChanged(): void {
    this.loginForm.valueChanges.subscribe(value => {
      let newValue = value.otp;
      if (value.otp !== this.oldValue) {
        console.log('Value has changed to: ' + newValue);
        this.oldValue = newValue
      }
    })
  }
}