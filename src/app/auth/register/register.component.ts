import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.form = this.fb.group(
      {
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repassword:['',Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.minLength(4)]]
    
      },
      {
        //validator:confirmPasswordValidator("password","repassword")
      }
    )
  }

  login() {
    console.log(this.form.value)
  }
  asFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }
}
