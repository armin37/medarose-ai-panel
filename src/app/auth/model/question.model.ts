import {QuestionTypeEnumModel} from "./questionTypeEnum.model";
import {MultiInputQuestionModel} from "./multiInputQuestion.model";
import {UiCodeEnumModel} from "./uiCodeEnum.model";

export interface QuestionModel {
  id: number;
  code: string;
  aiLabel: string;
  text: string;
  section: string;
  type: QuestionTypeEnumModel;
  inputs: MultiInputQuestionModel[];
  popup: any;
  next: any;
  getDataText: any;
  order: number;
  gender: any;
  q2Tags: any;
  metaTags: [];
  parentId: any;
  surveyId: number;
  createDate: string;
  updateDate: string;
  uiCode: UiCodeEnumModel;
}
