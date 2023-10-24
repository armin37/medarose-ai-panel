import {Component, OnInit} from '@angular/core';
import {MrKnobComponent} from "../../../components/mr-knob/mr-knob.component";
import {MessagesModule} from 'primeng/messages';
import {Message} from "primeng/api/message";
import {MrSelectComponent} from "../../../components/mr-select/mr-select.component";
import {UsersSurveysResponseModel} from "../../../auth/model/usersSurveysResponse.model";
import {SurveyModel} from "../../../auth/model/survey.model";
import {InsuredService} from "../../../shared/services/insured/insured.service";
import {ActivatedRoute} from "@angular/router";
import {DecimalPipe, NgIf} from "@angular/common";
import {SurveyDetailResponseModel} from "../../../auth/model/surveyDetailResponse.model";
import {MrWidgetComponent} from "../../../components/mr-widget/mr-widget.component";
import {LoadingService} from "../../../shared/services/loading/loading.service";
import {SurveyDetailComponent} from "../survey-detail/survey-detail.component";
import {UserAllDataModel} from "../../../auth/model/userResponseModel";

@Component({
  selector: 'app-coverage-rate',
  templateUrl: './coverage-rate.component.html',
  styleUrls: ['./coverage-rate.component.scss'],
  standalone: true,
  imports: [
    MrKnobComponent,
    MessagesModule,
    MrSelectComponent,
    NgIf,
    MrWidgetComponent,
    SurveyDetailComponent,
    DecimalPipe
  ]
})
export class CoverageRateComponent implements OnInit {
  userId;
  user: UserAllDataModel;
  selectedSurvey: SurveyDetailResponseModel;
  selectedSurveyId: number;
  allSurveys: SurveyModel[];
  surveyDetailLoading = false;
  messages: Message[];
  messages2: Message[];
  selectTestMessage: Message[];

  constructor(public loadingService: LoadingService,
              private activatedRoute: ActivatedRoute,
              private insuredService: InsuredService) {
  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
    this.loadUserData();
    this.loadSurveys();
    this.messages = [{
      icon: ' ',
      severity: 'success',
      summary: 'شخهسی خشهیت شها یشهعزاظهطاز هعازشسهعای شهعازظهعزا ظطهعز اسشهعا یسشهاطظهاز '
    }];

    this.messages2 = [{
      icon: ' ',
      severity: 'info',
      summary: 'شخهسی خشهیت شها یشهعزاظهطاز هعازشسهعای شهعازظهعزا ظطهعز اسشهعا یسشهاطظهاز '
    }];

    this.selectTestMessage = [{
      icon: ' ',
      severity: 'error',
      summary: 'لطفا یک تست را انتخاب کنید'
    }];

  }


  loadSurveys(event?) {
    const params = new URLSearchParams();
    params.set('userId', this.userId);
    this.insuredService.searchSurveys(params).subscribe({
      next: (res: UsersSurveysResponseModel) => {
        res = new UsersSurveysResponseModel(res);
        this.allSurveys = [];
        const noSelect = new SurveyModel({createDateStr: '- - -'});
        noSelect.createDateStr = '- - -'
        this.allSurveys.push(noSelect);
        this.allSurveys.push(...res.data.data);
      },
      error: () => {
        this.allSurveys = [];
      }
    })
  }

  loadSurveyDetail() {
    this.insuredService.loadSurvey(this.selectedSurveyId).subscribe(
      (res: SurveyDetailResponseModel) => {
        this.selectedSurvey = res;
      })
  }

  loadUserData() {
    this.insuredService.loadUser(this.userId).subscribe((user: UserAllDataModel) => {
      this.user = user;
      console.log(this.user)
    })
  }

  surveySelect(surveyId: number) {
    this.selectedSurvey = undefined;
    this.selectedSurveyId = surveyId;
    if (this.selectedSurveyId)
      this.loadSurveyDetail();
  }

  protected readonly parseInt = parseInt;
}
