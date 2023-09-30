import {InsuredUserModel} from "./insuredUser.model";
import {SurveyModel} from "./survey.model";

export class UsersSurveysResponseModel {
  hasError: boolean;
  data: {
    count: number;
    data: SurveyModel[]
  }

  constructor(data: UsersSurveysResponseModel) {
    this.hasError = data.hasError;
    this.data = {
      count: data.data.count,
      data: data.data.data.map(userData => new SurveyModel(userData))
    };
  }
}
