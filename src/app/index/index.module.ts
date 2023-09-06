import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndexRoutingModule} from './index-routing.module';
import {SidebarModule} from '@coreui/angular';
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
