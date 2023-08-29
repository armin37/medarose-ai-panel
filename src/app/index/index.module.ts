import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndexRoutingModule} from './index-routing.module';
import {IndexComponent} from './index.component';
import {SidebarModule} from '@coreui/angular';
import {DefaultHeaderComponent} from "./default-header/default-header.component";
import {GridModule} from '@coreui/angular';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SidebarModule,
    GridModule,
    RouterModule
  ]
})
export class IndexModule {
}
