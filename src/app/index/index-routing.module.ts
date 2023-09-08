import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index.component";
import {authGuard} from "../shared/guards/auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'insured/list',
        loadComponent: () => import('./insured/insured-list/insured-list.component').then(m => m.InsuredListComponent)
      },
      {
        path: 'insured/new',
        loadComponent: () => import('./insured/new-edit-insured/new-edit-insured.component').then(m => m.NewEditInsuredComponent),
        children: [
          {
            path: 'phone',
            loadComponent: () => import('./insured/new-edit-insured/enter-mobile-step/enter-mobile-step.component').then(m => m.EnterMobileStepComponent),
          },
          {
            path: 'approve-data',
            loadComponent: () => import('./insured/new-edit-insured/data-and-code-step/data-and-code-step.component').then(m => m.DataAndCodeStepComponent),
          }
        ]
      },
      {
        path: 'insured/edit/:id',
        loadComponent: () => import('./insured/new-edit-insured/new-edit-insured.component').then(m => m.NewEditInsuredComponent)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule {
}
