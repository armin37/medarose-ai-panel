import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {CardModule, FormModule, GridModule, ButtonModule} from "@coreui/angular";
import {IconModule} from "@coreui/icons-angular";
import {MrButtonComponent} from "../../components/mr-button/mr-button.component";
import {MrInputComponent} from "../../components/mr-input/mr-input.component";
import {MrPasswordComponent} from "../../components/mr-password/mr-password.component";
import {MrInputNumberComponent} from "../../components/mr-input-number/mr-input-number.component";
import {MrSelectComponent} from "../../components/mr-select/mr-select.component";


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
    IconModule,
    MrButtonComponent,
    MrInputComponent,
    MrPasswordComponent,
    MrInputNumberComponent,
    MrSelectComponent
  ]
})
export class LoginModule {
}
