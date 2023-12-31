import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {MrButtonComponent} from "../../../../components/mr-button/mr-button.component";
import {MrInputComponent} from "../../../../components/mr-input/mr-input.component";
import {Router} from "@angular/router";
import {InsuranceEmployeeService} from "../../../../shared/services/insurance-employee/insurance-employee.service";
import {
  InsuranceEmployeeInfoService
} from "../../../../shared/services/insurance-employee-info/insurance-employee-info.service";
import {MrPasswordComponent} from "../../../../components/mr-password/mr-password.component";
import {navAbsoluteURLS} from '../../../_nav';
import {LoadingService} from "../../../../shared/services/loading/loading.service";
import {ColorEnum} from "../../../../shared/enums/colorEnum";

@Component({
  selector: 'app-data-and-code-step',
  standalone: true,
  imports: [CommonModule, FormsModule, MrButtonComponent, MrInputComponent, ReactiveFormsModule, MrPasswordComponent],
  templateUrl: './data-and-code-step.component.html',
  styleUrls: ['./data-and-code-step.component.scss']
})
export class DataAndCodeStepComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private insuranceEmployeeService: InsuranceEmployeeService,
              private insuranceEmployeeInfoService: InsuranceEmployeeInfoService,
              public loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      phone: [{
        value: this.insuranceEmployeeService.addUserPhoneTemp,
        disabled: true
      }, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      code: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(5)]],
      nationalCode: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    })
  }

  concurInfo() {
    if (this.form.invalid) {
      return;
    }

    const res$ = this.insuranceEmployeeService.addUserVerifyOTP(this.form.getRawValue()).subscribe(() => {
      this.router.navigateByUrl(navAbsoluteURLS.INSURED.LIST)
    })
  }

  backToPhoneStep() {
    this.router.navigateByUrl(navAbsoluteURLS.INSURED.NEW_EDIT.PHONE);
  }

  asFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }

    protected readonly ColorEnum = ColorEnum;
}
