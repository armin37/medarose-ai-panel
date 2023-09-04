import {InsuranceEmployeeUserModel} from "./insuranceEmployeeUser.model";

export interface RegisterResponseModel {
  hasError: boolean,
  message: string,
  data: InsuranceEmployeeUserModel
}

