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
import {navAbsoluteURLS} from '../../../_nav';
import {LoadingService} from "../../../../shared/services/loading/loading.service";

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
              public loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      phone: [this.insuranceEmployeeService.addUserPhoneTemp, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    })
  }

  enterMobile() {
    if (this.form.invalid) {
      return;
    }
    const phone = '+98' + this.form.controls['phone'].value;
    const res$ = this.insuranceEmployeeService.addUserSendOtp({phone});
    res$.subscribe(() => {
      this.router.navigateByUrl(navAbsoluteURLS.INSURED.NEW_EDIT.APPROVE_DATA)
    })
  }

  asFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }
}
