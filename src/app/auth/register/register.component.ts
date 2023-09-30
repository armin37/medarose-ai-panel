import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {InsuranceEmployeeService} from "../../shared/services/insurance-employee/insurance-employee.service";
import {RegisterResponseModel} from "../model/registerResponse.model";
import {InsuranceEmployeeUserModel} from "../model/insuranceEmployeeUser.model";
import {ColorEnum} from "../../shared/enums/colorEnum";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private insuranceEmployeeService: InsuranceEmployeeService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        companyId: [1, Validators.required],
      }
    )
  }

  register() {
    if (this.form.invalid) {
      return;
    }

    this.insuranceEmployeeService.signup(this.form.value).subscribe((res: InsuranceEmployeeUserModel) => {
      console.log(res);
    })
  }

  asFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }

    protected readonly ColorEnum = ColorEnum;
}
