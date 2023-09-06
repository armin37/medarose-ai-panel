import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {Observable} from "rxjs";
import {inject} from "@angular/core";
import {InsuranceEmployeeInfoService} from "../../services/insurance-employee-info/insurance-employee-info.service";
import {InsuranceEmployeeService} from "../../services/insurance-employee/insurance-employee.service";
import {map} from "rxjs/operators";
import {InsuranceEmployeeUserModel} from "../../../auth/model/insuranceEmployeeUser.model";

export const authGuard: CanActivateFn = (route, state): Observable<boolean | UrlTree> | boolean | UrlTree => {
  const router = inject(Router);
  const insuranceEmployeeService = inject(InsuranceEmployeeService);
  const insuranceEmployeeInfoService = inject(InsuranceEmployeeInfoService);

  if (insuranceEmployeeInfoService.userLoaded) {
    return !!insuranceEmployeeInfoService.user ? true : router.parseUrl(`/login`);
  }
  insuranceEmployeeService.getCurrentUserProfile();
  return insuranceEmployeeInfoService.userLoaded$.pipe(
    map((data: InsuranceEmployeeUserModel | undefined) => {
      return !!data ? true : router.parseUrl(`/login`);
    })
  );
};
