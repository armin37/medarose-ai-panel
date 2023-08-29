import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IndexComponent} from "./index/index.component";
import {GridModule, SidebarModule} from "@coreui/angular";
import {DefaultHeaderComponent} from "./index/default-header/default-header.component";
import {NgScrollbarModule} from "ngx-scrollbar";
import {IconModule, IconSetService} from "@coreui/icons-angular";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DefaultHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    GridModule,
    NgScrollbarModule,
    IconModule
  ],
  providers: [
    IconSetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
