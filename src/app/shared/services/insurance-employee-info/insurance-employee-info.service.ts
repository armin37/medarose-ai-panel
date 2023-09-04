import {Injectable} from '@angular/core';
import {InsuranceEmployeeUserModel} from "../../../auth/model/insuranceEmployeeUser.model";

@Injectable({
  providedIn: 'root'
})
export class InsuranceEmployeeInfoService {
  user: InsuranceEmployeeUserModel;
  token: string;

  constructor() {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
    }
  }
}
