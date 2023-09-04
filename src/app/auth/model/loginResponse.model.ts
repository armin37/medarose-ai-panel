import {InsuranceEmployeeUserModel} from "./insuranceEmployeeUser.model";

export interface LoginResponseModel {
  hasError: boolean,
  data: {
    user: InsuranceEmployeeUserModel,
    token: string
  }
}
