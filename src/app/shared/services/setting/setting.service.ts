import { Injectable } from '@angular/core';
import {RequestService} from "../request/request.service";
import {LoadingService} from "../loading/loading.service";

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private requestService: RequestService,
              private loadingService: LoadingService) { 

  }
  loadCompany(companyId) {
    const res$ = this.requestService.sendRequest('GET', `insurance-company/1`);

    const loading$ = this.loadingService.showLoaderUntilComplete(res$, 'company');

    return loading$;
  }
}
