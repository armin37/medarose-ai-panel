import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {InsuranceEmployeeService} from "../../shared/services/insurance-employee/insurance-employee.service";
import {
  InsuranceEmployeeInfoService
} from "../../shared/services/insurance-employee-info/insurance-employee-info.service";
import {Router} from "@angular/router";
import {LoadingService} from "../../shared/services/loading/loading.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              public loadingService: LoadingService,
              private insuranceEmployeeService: InsuranceEmployeeService,
              private insuranceEmployeeInfoService: InsuranceEmployeeInfoService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })

    this.insuranceEmployeeService.getCurrentUserProfile().subscribe((res) => {
      console.log(res)
    })
  }

  login() {
    if (this.form.invalid) {
      return;
    }

    this.insuranceEmployeeService.login(this.form.value).subscribe(() => {
      this.router.navigateByUrl('/index');
    });
  }

  asFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }

}
