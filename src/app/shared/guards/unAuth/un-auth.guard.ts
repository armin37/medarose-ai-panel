import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {InsuranceEmployeeService} from "../../services/insurance-employee/insurance-employee.service";
import {InsuranceEmployeeInfoService} from "../../services/insurance-employee-info/insurance-employee-info.service";
import {map} from "rxjs/operators";
import {InsuranceEmployeeUserModel} from "../../../auth/model/insuranceEmployeeUser.model";

export const unAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const insuranceEmployeeService = inject(InsuranceEmployeeService);
  const insuranceEmployeeInfoService = inject(InsuranceEmployeeInfoService);

  if (insuranceEmployeeInfoService.userLoaded) {
    return !insuranceEmployeeInfoService.user ? true : router.parseUrl(`/index`);
  }
  insuranceEmployeeService.getCurrentUserProfile();
  return insuranceEmployeeInfoService.userLoaded$.pipe(
    map((data: InsuranceEmployeeUserModel | undefined) => {
      return !data ? true : router.parseUrl(`/index`);
    })
  );
};
