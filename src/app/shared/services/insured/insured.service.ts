import {Injectable} from '@angular/core';
import {RequestService} from "../request/request.service";
import {LoadingService} from "../loading/loading.service";

@Injectable({
  providedIn: 'root'
})
export class InsuredService {

  constructor(private requestService: RequestService,
              private loadingService: LoadingService) {
    loadingService.createLoader('survey')
  }

  searchUsers(params) {
    const res$ = this.requestService.sendRequest(`GET`, `insurance-employee/user?${params}`);
    return res$;
  };

  searchSurveys(params) {
    const res$ = this.requestService.sendRequest('GET', `insurance-employee/user-survey?${params}`);
    return res$;
  }

  sendSurvey(userId) {
    const res$ = this.requestService.sendRequest('POST', `insurance-employee/user/${userId}/send-link`, {}, true);
    return res$;
  }

  loadSurvey(surveyId) {
    const res$ = this.requestService.sendRequest('GET', `insurance-employee/user-survey/${surveyId}`);

    const loading$ = this.loadingService.showLoaderUntilComplete(res$, 'survey');

    return loading$;
  }
}
