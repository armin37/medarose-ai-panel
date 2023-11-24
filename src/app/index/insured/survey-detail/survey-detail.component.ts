import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {MrKnobComponent} from "../../../components/mr-knob/mr-knob.component";
import {MrProgressComponent} from "../../../components/mr-progress/mr-progress.component";
import {InsuredService} from "../../../shared/services/insured/insured.service";
import {SurveyDetailResponseModel} from "../../../auth/model/surveyDetailResponse.model"
import {data} from "autoprefixer";
import {UiCodeEnumModel} from "../../../auth/model/uiCodeEnum.model";
import {QuestionTypeEnumModel} from "../../../auth/model/questionTypeEnum.model";

@Component({
  selector: 'survey-detail',
  standalone: true,
  imports: [CommonModule, MrKnobComponent, MrProgressComponent],
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.scss']
})
export class SurveyDetailComponent implements OnInit {
  surveyId;
  @Input() survey: SurveyDetailResponseModel;
  @Input() showGauge = true;

  constructor(private activatedRoute: ActivatedRoute,
              private insuredService: InsuredService) {

  }

  ngOnInit(): void {
    this.surveyId = this.activatedRoute.snapshot.paramMap.get('surveyId');
    if (!this.survey) {
      this.loadSurvey();
    }
  }

  loadSurvey() {
    this.insuredService.loadSurvey(this.surveyId).subscribe(
      (res: SurveyDetailResponseModel) => {
        this.survey = res;
      })
  }


    protected readonly data = data;
  protected readonly UiCodeEnumModel = UiCodeEnumModel;
  protected readonly QuestionTypeEnumModel = QuestionTypeEnumModel;
}
