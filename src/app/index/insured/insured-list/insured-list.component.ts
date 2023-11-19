import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {navAbsoluteURLS} from '../../_nav';
import {Router} from '@angular/router';
import {InsuredUserModel} from "../../../auth/model/insuredUser.model";
import {SearchUsersResponseModel} from "../../../auth/model/searchUsersResponse.model";
import {TableModule} from 'primeng/table';
import {MrButtonComponent} from "../../../components/mr-button/mr-button.component";
import {ColorEnum} from "../../../shared/enums/colorEnum";
import {InsuredService} from "../../../shared/services/insured/insured.service";
import {NgPersianDatepickerModule} from "ng-persian-datepicker";
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-insured-list',
  standalone: true,
  imports: [CommonModule, TableModule, MrButtonComponent, FormsModule, ReactiveFormsModule, NgPersianDatepickerModule],
  templateUrl: './insured-list.component.html',
  styleUrls: ['./insured-list.component.scss']
})


export class InsuredListComponent implements OnInit {
  dataLoading = false;
  totalRecords: number;
  offset = 0;
  limit = 10;
  data: InsuredUserModel[];
  fromDateValue = new FormControl();
  toDateValue = new FormControl();
  params = new URLSearchParams();

  protected readonly ColorEnum = ColorEnum;

  constructor(private insuredService: InsuredService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.dataLoading = true;

    const res$ = this.insuredService.searchUsers(this.params);
    res$.subscribe({
      next: (res: SearchUsersResponseModel) => {
        const sur = new SearchUsersResponseModel(res)
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

  addFilters(event: any) {
    this.offset = 0;
    this.params = new URLSearchParams();
    for (const key in event?.filters) {
      if (event?.filters[key].value) {
        this.params.set(key, event.filters[key].value);
      }
    }
    if (this.fromDateValue.value) {
      this.params.set('dateFrom', moment.from(this.fromDateValue.value, 'en', 'jYYYY/jMM/jDD').valueOf().toString());
    }
    if (this.fromDateValue.value) {
      this.params.set('dateTo', moment.from(this.toDateValue.value, 'en', 'jYYYY/jMM/jDD').valueOf().toString());
    }

    this.setLimitOffetParams();

    this.loadUsers();
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

  toCoverageRate(userId) {
    this.router.navigateByUrl(`${navAbsoluteURLS.INSURED.COVERAGE_RATE}/${userId}`);
  }

  setLimitOffetParams() {
    this.params.set('offset', this.offset.toString());
    this.params.set('limit', this.limit.toString());
  }

  pageChange(event: any) {
    this.offset = event.first;
    this.limit = event.rows;
    this.setLimitOffetParams();
    this.loadUsers();
  }
}
