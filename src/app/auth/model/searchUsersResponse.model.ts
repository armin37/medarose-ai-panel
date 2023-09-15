import {InsuredUserModel} from "./insuredUser.model";

export interface searchUsersResponseModel {
  hasError: boolean,
  data: {
    count: number,
    data: InsuredUserModel[]
  }
}
