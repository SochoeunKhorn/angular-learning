import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {InputTextModule} from "primeng/inputtext";
import { CustomerComponent } from './components/customer/customer.component';
import { ManuBarComponent } from './components/manu-bar/manu-bar.component';
import {AvatarModule} from "primeng/avatar";
import { ManuItemComponent } from './components/manu-item/manu-item.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {MenuModule} from "primeng/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SidebarModule} from "primeng/sidebar";
import { ManageCustomerComponent } from './components/manage-customer/manage-customer.component';
import { LoginComponent } from './components/login/login.component';
import {AuthenticationService} from "./services/authentication/authentication.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MessageModule} from "primeng/message";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ManuBarComponent,
    ManuItemComponent,
    HeaderBarComponent,
    ManageCustomerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    InputTextModule,
    AvatarModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    SidebarModule,
    HttpClientModule,
    MessageModule,
    ToastModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
