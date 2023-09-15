import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {
  InsuranceEmployeeInfoService
} from 'src/app/shared/services/insurance-employee-info/insurance-employee-info.service';
import {navAbsoluteURLS} from '../../_nav';
import {Router} from '@angular/router';
import {InsuranceEmployeeService} from "../../../shared/services/insurance-employee/insurance-employee.service";

@Component({
  selector: 'app-insured-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insured-list.component.html',
  styleUrls: ['./insured-list.component.scss']
})


export class InsuredListComponent implements OnInit {

  constructor(private insuranceEmployeeService: InsuranceEmployeeService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    const res$ = this.insuranceEmployeeService.searchUsers();
    res$.subscribe(
      (res) => {
        console.log(res);
      }
    )
  }
}
