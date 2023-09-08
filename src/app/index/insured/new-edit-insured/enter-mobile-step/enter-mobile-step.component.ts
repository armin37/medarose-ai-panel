import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MrButtonComponent} from "../../../../components/mr-button/mr-button.component";
import {Router} from "@angular/router";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {MrInputComponent} from "../../../../components/mr-input/mr-input.component";
import {MrPasswordComponent} from "../../../../components/mr-password/mr-password.component";
import {InsuranceEmployeeService} from "../../../../shared/services/insurance-employee/insurance-employee.service";
import {
  InsuranceEmployeeInfoService
} from "../../../../shared/services/insurance-employee-info/insurance-employee-info.service";

@Component({
  selector: 'app-enter-mobile-step',
  standalone: true,
  imports: [CommonModule, MrButtonComponent, FormsModule, MrInputComponent, MrPasswordComponent, ReactiveFormsModule],
  templateUrl: './enter-mobile-step.component.html',
  styleUrls: ['./enter-mobile-step.component.scss']
})
export class EnterMobileStepComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private insuranceEmployeeService: InsuranceEmployeeService,
              private insuranceEmployeeInfoService: InsuranceEmployeeInfoService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    })
  }

  enterMobile() {
    if (this.form.invalid) {
      return;
    }
    //TODO
    this.router.navigateByUrl('/index/insured/new/approve-data')
  }

  asFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }
}
