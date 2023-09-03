import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {CardModule, FormModule, GridModule, ButtonModule} from "@coreui/angular";
import {IconModule} from "@coreui/icons-angular";
import {MrButtonComponent} from "../../components/mr-button/mr-button.component";
import {MrInputComponent} from "../../components/mr-input/mr-input.component";
import {MrPasswordComponent} from "../../components/mr-password/mr-password.component";
import {MrInputNumberComponent} from "../../components/mr-input-number/mr-input-number.component";
import {MrSelectComponent} from "../../components/mr-select/mr-select.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    GridModule,
    CardModule,
    FormModule,
    ButtonModule,
    IconModule,
    MrButtonComponent,
    MrInputComponent,
    MrPasswordComponent,
    MrInputNumberComponent,
    MrSelectComponent,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
