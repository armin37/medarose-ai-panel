import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {InsuredService} from "../../../shared/services/insured/insured.service";
import {MrButtonComponent} from "../../../components/mr-button/mr-button.component";
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {InsuredUserModel} from "../../../auth/model/insuredUser.model";
import {SurveyModel} from "../../../auth/model/survey.model";
import {UsersSurveysResponseModel} from "../../../auth/model/usersSurveysResponse.model";
import {ColorEnum} from "../../../shared/enums/colorEnum";
import {CheckboxModule} from "primeng/checkbox";
import {FormControl, FormsModule} from "@angular/forms";
import {navAbsoluteURLS} from "../../_nav";

@Component({
  selector: 'app-user-surveys',
  standalone: true,
  imports: [CommonModule, MrButtonComponent, SharedModule, TableModule, CheckboxModule, FormsModule],
  templateUrl: './user-surveys.component.html',
  styleUrls: ['./user-surveys.component.scss']
})
export class UserSurveysComponent implements OnInit {
  userId;
  data: SurveyModel[];
  totalRecords: number;
  dataLoading = false;
  offset = 0;
  limit = 10;
  fromDateValue = new FormControl();
  toDateValue = new FormControl();
  params = new URLSearchParams();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private insuredService: InsuredService) {
  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
    this.params.set('userId', this.userId);
    this.loadSurveys();
  }

  loadSurveys() {
    this.dataLoading = true;

    this.insuredService.searchSurveys(this.params).subscribe({
      next: (res: UsersSurveysResponseModel) => {
        res = new UsersSurveysResponseModel(res);
        this.data = res.data.data;
        this.totalRecords = res.data.count;
        this.dataLoading = false;
      },
      error: () => {
        this.totalRecords = 0;
        this.data = [];
        this.dataLoading = false;
      }
    })
  }

  addFilters(event:any) {
    this.offset = 0;
    this.params = new URLSearchParams();
    this.params.set('userId', this.userId);
    for (const key in event?.filters) {
      if (event?.filters[key].value !== null && (event?.filters[key].value || event?.filters[key].matchMode === 'equals')) {
        this.params.set(key, event?.filters[key].value);
      }
    }
    this.setLimitOffetParams();
    this.loadSurveys()
  }

  pageChange(event: any) {
    this.offset = event.first;
    this.limit = event.rows;
    this.setLimitOffetParams();
    this.loadSurveys();
  }

  setLimitOffetParams() {
    this.params.set('offset', this.offset.toString());
    this.params.set('limit', this.limit.toString());
  }

  toSurveyDetail(id) {
    this.router.navigateByUrl(`${navAbsoluteURLS.INSURED.SURVEY_DETAIL}/${id}`);
  }

  protected readonly ColorEnum = ColorEnum;
}
