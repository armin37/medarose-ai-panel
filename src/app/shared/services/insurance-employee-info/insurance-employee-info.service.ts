import {Injectable} from '@angular/core';
import {InsuranceEmployeeUserModel} from "../../../auth/model/insuranceEmployeeUser.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InsuranceEmployeeInfoService {
  userLoadedSubject: Subject<InsuranceEmployeeUserModel | undefined> = new Subject<InsuranceEmployeeUserModel | undefined>();
  userLoaded$ = this.userLoadedSubject.asObservable();
  private _userLoaded: boolean = false;
  private _user: InsuranceEmployeeUserModel | undefined;
  private _token: string;

  constructor() {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
    }
  }


  get user(): InsuranceEmployeeUserModel | undefined {
    return this._user;
  }

  setUser(value: InsuranceEmployeeUserModel | undefined, userLoaded: boolean) {
    this._user = value;
    this._userLoaded = userLoaded;
    this.userLoadedSubject.next(value);
  }


  get userLoaded(): boolean {
    return this._userLoaded;
  }

  set userLoaded(value: boolean) {
    this._userLoaded = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
