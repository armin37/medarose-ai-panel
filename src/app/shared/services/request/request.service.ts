import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {InsuranceEmployeeInfoService} from "../insurance-employee-info/insurance-employee-info.service";
import {ToastService} from "../toast/toast.service";
import {ColorEnum} from "../../enums/colorEnum";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private DEFAULT_MAX_RETRIES = 3;
  private DEFAULT_BACKOFF = 1000;//ms
  ENDPOINT = 'https://apiai.medarose.ir/';

  constructor(private httpClient: HttpClient,
              private insuranceEmployeeInfoService: InsuranceEmployeeInfoService,
              private toastService: ToastService) {
    const EP = localStorage.getItem('endpoint');
    if (EP) {
      this.ENDPOINT = EP;
    }
  }


  generateHeader = () => {
    const authHead = {};
    let header: null | HttpHeaders = null;

    if (this.insuranceEmployeeInfoService.token) {
      authHead['Authorization'] = 'Bearer ' + this.insuranceEmployeeInfoService.token;
    }

    header = new HttpHeaders(authHead);
    header.append('Content-Type', 'multipart/form-data');
    header.append('Accept', 'application/json');
    return header;
  };

  sendRequest(method = 'POST',
              url = '/',
              body = {},
              showMessage = false,
              ...args): Observable<any> {
    let headers = this.generateHeader();
    let sendUrl = this.ENDPOINT + url;
    let fullResponse = false;

    args.map(arg => {
      if (arg.headers) {
        headers = arg.headers;
      }

      if (arg.fullResponse) {
        fullResponse = true;
      }

      if (arg.dontConcatEndpoint) {
        sendUrl = url;
      }
    });

    const res$ = this.httpClient.request(method, sendUrl, {
      body,
      headers,
      observe: 'response',
      withCredentials: false
    }).pipe(
      map(res => args.find(arg => arg.fullResponse) ? res : res.body),
      shareReplay()
    );
    res$.subscribe({
      next: (res) => {
        if (showMessage) {
          this.toastService.showMessage('موفقیت', 'عملیات با موفقیت انجام شد ', ColorEnum.SUCCESS)
        }
      },
      error: (err) => {
        if (err.error?.message) {
          this.toastService.showMessage('خطا', err.error.message, ColorEnum.DANGER)
        }
      }
    })

    return res$;
  }
}
