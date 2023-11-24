import * as moment from 'jalali-moment';
import {QuestionModel} from "./question.model";

export class SurveyModel {
  id?: number;
  isComplete?: boolean;
  userId?: number;
  surveyId?: number;
  createDate?: Date;
  updateDate?: Date;
  updateDateStr?: string;
  createDateStr?: string;
  createDateTimeStr: string;
  result?: ResultIllnesses;
  answers?: { answers: any, id: number, question: QuestionModel }[];


  constructor(data: SurveyModel) {
    Object.assign(this, data);

    this.updateDateStr = moment(data.updateDate).format('jYYYY/jMM/jDD');
    this.createDateStr = moment(data.createDate).format('jYYYY/jMM/jDD');
    this.createDateTimeStr = moment(data.createDate).format('jYYYY/jMM/jDD HH:MM');
  }
}

export class ResultIllnesses {
  BrainStroke: number;
  BreastCancer: number;
  CervicalCancer: number;
  ColonCancer: number;
  GastricCancer: number;
  HeartStroke: number;
  LungCancer: number;
  NoCancer: number;
  OvarianCancer: number;
  PancreaticCancer: number;
  ProstateCancer: number;


  constructor(data: ResultIllnesses | {} = {}) {
    Object.assign(this, data);
  }
}
