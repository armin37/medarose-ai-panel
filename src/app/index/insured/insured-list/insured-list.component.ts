import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InsuranceEmployeeInfoService } from 'src/app/shared/services/insurance-employee-info/insurance-employee-info.service';
import { navAbsoluteURLS } from '../../_nav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insured-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insured-list.component.html',
  styleUrls: ['./insured-list.component.scss']
})


export class InsuredListComponent implements OnInit {
  form: FormGroup;
  private insuranceEmployeeInfoService: InsuranceEmployeeInfoService;
  private router: Router;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    console.log(this.loadusers())
  }

  loadusers() {
    const res$ = this.insuranceEmployeeInfoService.addUserVerifyOTP(this.form.getRawValue()).subscribe(() => {
      this.router.navigateByUrl(navAbsoluteURLS.INSURED.LIST)
    })
  }
}
