import {SurveyModel} from "./survey.model";


export interface SurveyDetailResponseModel {
  hasError: boolean,
  data: {
    average: number,
    reduction: ReductionModel,
    risk: RiskModel,
    userSurvey: SurveyModel,
  }
}

interface ReductionModel {
  removeHighRiskDiseases: string[]
}

interface RiskModel {
  accidentalDeath: number;
  death: number;
  disease: number;
  naturalDeath: number
}
