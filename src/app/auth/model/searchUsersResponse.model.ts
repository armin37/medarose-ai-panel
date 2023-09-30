import {InsuredUserModel} from "./insuredUser.model";

export class SearchUsersResponseModel {
  hasError: boolean;
  data: {
    count: number;
    data: InsuredUserModel[]
  }

  constructor(data: SearchUsersResponseModel) {
    this.hasError = data.hasError;
    this.data = {
      count: data.data.count,
      data: data.data.data.map(userData => new InsuredUserModel(userData))
    };
  }
}
