import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {CardModule, FormModule, GridModule, ButtonModule} from "@coreui/angular";
import {IconModule} from "@coreui/icons-angular";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    GridModule,
    CardModule,
    FormModule,
    ButtonModule,
    IconModule
  ]
})
export class LoginModule {
}
