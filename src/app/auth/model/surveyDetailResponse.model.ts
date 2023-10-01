import { SurveyModel } from "./survey.model";


export interface SurveyDetailResponseModel {
  hasError: boolean,
  data: {
    reduction: ReductionModel,
    risk: RiskModel,
    userSurvey: SurveyModel,
  }
}

interface ReductionModel{
  removeHighRiskDiseases: []
}

interface RiskModel{
  accidentalDeath: number;
  death: number;
  disease: number;
  naturalDeath: number
}
