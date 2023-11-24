import {Injectable} from '@angular/core';
import {RequestService} from "../request/request.service";
import {LoadingService} from "../loading/loading.service";
import {Observable} from "rxjs";
import {InsuredUserModel} from "../../../auth/model/insuredUser.model";
import {map} from "rxjs/operators";
import {UserAllDataModel, UserResponseModel} from "../../../auth/model/userResponseModel";

@Injectable({
  providedIn: 'root'
})
export class InsuredService {

  constructor(private requestService: RequestService,
              private loadingService: LoadingService) {
    loadingService.createLoader('user');
    loadingService.createLoader('survey');
    loadingService.createLoader('download');
  }

  loadUser(userId: number): Observable<UserAllDataModel> {
    const res$ = this.requestService.sendRequest(`GET`, `insurance-employee/user/${userId}`);
    const loading$ = this.loadingService.showLoaderUntilComplete(res$, 'user').pipe(
      map((user: UserResponseModel) => user.data)
    );
    return loading$;
  };

  searchUsers(params: URLSearchParams) {
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

  downloadSurveyXLSX(params: URLSearchParams) {
    const res$ = this.requestService.sendRequest('GET', `insurance-employee/report/excel?${params}`, {}, false, {responseType: 'blob'});

    const loading$ = this.loadingService.showLoaderUntilComplete(res$, 'download');
    loading$.subscribe(data => {
      const blob = new Blob([data], { type: 'application/octet-stream' });
      const link= document.createElement('a');
      link.href = window.URL.createObjectURL(data);
      link.download = 'users.xlsx';
      link.click();
    })
    return loading$;
  }
}
