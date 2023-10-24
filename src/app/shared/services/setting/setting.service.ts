import {Injectable} from '@angular/core';
import {RequestService} from "../request/request.service";
import {LoadingService} from "../loading/loading.service";
import {InsuranceEmployeeInfoService} from "../insurance-employee-info/insurance-employee-info.service";
import {map} from "rxjs/operators";
import {CoverageSetting, SettingModel} from "../../../auth/model/setting.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private requestService: RequestService,
              private loadingService: LoadingService,
              private insuranceEmployeeInfoService: InsuranceEmployeeInfoService) {
    loadingService.createLoader('setting')
  }

  loadCompany(): Observable<CoverageSetting> {
    const res$ = this.requestService.sendRequest('GET', `insurance-company/${this.insuranceEmployeeInfoService.user.companyId}`);
    const loading$ = this.loadingService.showLoaderUntilComplete(res$, 'setting').pipe(map((a: SettingModel) => a.data.coverageSetting));
    return loading$;
  }
}
