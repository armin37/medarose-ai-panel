import {Injectable} from '@angular/core';
import {RequestService} from "../request/request.service";
import {LoadingService} from "../loading/loading.service";

@Injectable({
  providedIn: 'root'
})
export class InsuranceEmployeedetailService {
  

  constructor(private requestService: RequestService,
    private loadingService: LoadingService) {
   
  }
  loadSurvey(surveyId) {
    const res$ = this.requestService.sendRequest('GET', `insurance-employee/user-survey/${surveyId}`);
    return res$;
  }
}
