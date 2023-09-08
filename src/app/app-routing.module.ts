import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {unAuthGuard} from "./shared/guards/unAuth/un-auth.guard";
import {authGuard} from "./shared/guards/auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(a => a.LoginModule),
    canActivate: [unAuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(a => a.RegisterModule),
    canActivate: [unAuthGuard]
  },
  {
    path: '**',
    redirectTo: 'index'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
