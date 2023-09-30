import {Injectable} from '@angular/core';
import {RequestService} from "../request/request.service";
import {RegisterResponseModel} from "../../../auth/model/registerResponse.model";
import {map} from "rxjs/operators";
import {LoginResponseModel} from "../../../auth/model/loginResponse.model";
import {InsuranceEmployeeUserModel} from "../../../auth/model/insuranceEmployeeUser.model";
import {InsuranceEmployeeInfoService} from "../insurance-employee-info/insurance-employee-info.service";
import {ProfileResponseModel} from "../../../auth/model/profileResponse.model";
import {LoadingService} from "../loading/loading.service";
import {SearchUsersResponseModel} from "../../../auth/model/searchUsersResponse.model";

@Injectable({
  providedIn: 'root'
})
export class InsuranceEmployeeService {
  addUserPhoneTemp = '';

  constructor(private requestService: RequestService,
              private loadingService: LoadingService,
              private insuranceEmployeeInfoService: InsuranceEmployeeInfoService) {
    loadingService.createLoader('login', 'signup', 'otp')
  }

  getCurrentUserProfile() {
    const res$ = this.requestService.sendRequest('GET', 'insurance-employee/profile');
    res$.subscribe({
      next: (res: ProfileResponseModel) => {
        this.insuranceEmployeeInfoService.setUser(res.data, true);
      }, error: (err) => {
        this.insuranceEmployeeInfoService.setUser(undefined, true);
        return err;
      }
    });
    return res$;
  };

  signup(body) {
    const res$ = this.requestService.sendRequest('POST', 'insurance-employee/signup', body);
    res$.pipe(map((res: RegisterResponseModel) => res.data)).subscribe((res: InsuranceEmployeeUserModel) => {
      // console.log(res);
    });
    return res$;
  };

  login(body) {

    const res$ = this.requestService.sendRequest('POST', 'insurance-employee/login', body);

    const loading$ = this.loadingService.showLoaderUntilComplete(res$, 'login');

    loading$.subscribe((res: LoginResponseModel) => {
      this.insuranceEmployeeInfoService.setUser(res.data.user, true);
      this.insuranceEmployeeInfoService.token = res.data.token;
      localStorage.setItem('token', res.data.token);
    });
    return loading$;
  };

  addUserSendOtp(body) {

    const res$ = this.requestService.sendRequest('POST', 'insurance-employee/user/send-otp', body);

    const loading$ = this.loadingService.showLoaderUntilComplete(res$, 'otp');

    loading$.subscribe(() => {
      this.addUserPhoneTemp = body.phone;
    });
    return loading$;
  };

  addUserVerifyOTP(body) {

    const res$ = this.requestService.sendRequest('POST', 'insurance-employee/user/verify-otp', body);

    const loading$ = this.loadingService.showLoaderUntilComplete(res$, 'otp');

    loading$.subscribe(() => {
      this.addUserPhoneTemp = '';
    });
    return loading$;
  };
}
