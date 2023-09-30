import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import {
  InsuranceEmployeeInfoService
} from 'src/app/shared/services/insurance-employee-info/insurance-employee-info.service';
import {navAbsoluteURLS} from '../../_nav';
import {Router} from '@angular/router';
import {InsuranceEmployeeService} from "../../../shared/services/insurance-employee/insurance-employee.service";
import {InsuredUserModel} from "../../../auth/model/insuredUser.model";
import {SearchUsersResponseModel} from "../../../auth/model/searchUsersResponse.model";
import {TableModule} from 'primeng/table';
import {MrButtonComponent} from "../../../components/mr-button/mr-button.component";
import {ColorEnum} from "../../../shared/enums/colorEnum";
import {InsuredService} from "../../../shared/services/insured/insured.service";

@Component({
  selector: 'app-insured-list',
  standalone: true,
  imports: [CommonModule, TableModule, MrButtonComponent, FormsModule],
  templateUrl: './insured-list.component.html',
  styleUrls: ['./insured-list.component.scss']
})


export class InsuredListComponent implements OnInit {
  dataLoading = false;
  totalRecords: number;
  data: InsuredUserModel[];

  protected readonly ColorEnum = ColorEnum;

  constructor(private insuredService: InsuredService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(event?: any) {
    this.dataLoading = true;

    const params = this.addFilters(event?.filters);

    const res$ = this.insuredService.searchUsers(params);
    res$.subscribe({
      next: (res: SearchUsersResponseModel) => {
        const sur= new SearchUsersResponseModel(res)
        this.totalRecords = sur.data.count;
        this.data = sur.data.data;
        this.dataLoading = false;
      },
      error: () => {
        this.totalRecords = 0;
        this.data = [];
        this.dataLoading = false;
      }
    })
  }

  addFilters(filters) {
    const params = new URLSearchParams();
    for (const key in filters) {
      if (filters[key].value) {
        params.set(key, filters[key].value);
      }
    }
    return params;
  }

  sendSurvey(userId) {
    this.dataLoading = true;
    this.insuredService.sendSurvey(userId).subscribe(
      () => {
        this.dataLoading = false;
      }
    )
  }

  toSurveys(userId) {
    this.router.navigateByUrl(`${navAbsoluteURLS.INSURED.SURVEYS}/${userId}`);
  }
}
