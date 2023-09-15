import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {
  InsuranceEmployeeInfoService
} from 'src/app/shared/services/insurance-employee-info/insurance-employee-info.service';
import {navAbsoluteURLS} from '../../_nav';
import {Router} from '@angular/router';
import {InsuranceEmployeeService} from "../../../shared/services/insurance-employee/insurance-employee.service";
import {InsuredUserModel} from "../../../auth/model/insuredUser.model";
import {searchUsersResponseModel} from "../../../auth/model/searchUsersResponse.model";
import {TableModule} from 'primeng/table';
import {MrButtonComponent} from "../../../components/mr-button/mr-button.component";

@Component({
  selector: 'app-insured-list',
  standalone: true,
  imports: [CommonModule, TableModule, MrButtonComponent],
  templateUrl: './insured-list.component.html',
  styleUrls: ['./insured-list.component.scss']
})


export class InsuredListComponent implements OnInit {
  dataLoading = false;
  totalRecords: number;
  data: InsuredUserModel[];

  constructor(private insuranceEmployeeService: InsuranceEmployeeService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(event?) {
    this.dataLoading = true;
    const res$ = this.insuranceEmployeeService.searchUsers();
    res$.subscribe(
      (res: searchUsersResponseModel) => {
        this.totalRecords = res.data.count;
        this.data = res.data.data;
        this.dataLoading = false;
        console.log(this.data)
      }
    )
  }
}
