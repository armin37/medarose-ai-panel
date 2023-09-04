import {InsuranceEmployeeUserModel} from "./insuranceEmployeeUser.model";

export interface ProfileResponseModel {
  hasError: boolean,
  data: {
    user: InsuranceEmployeeUserModel,
  }
}
