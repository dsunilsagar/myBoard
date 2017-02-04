import { NgModule }      from '@angular/core';
import {BaseRequestOptions} from '@angular/http';

import { AppComponent }  from './mb.component';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {routing} from "./mb.routing";


import {DashboardComponent} from "./dashboard/dahshboard.component";
import {HeaderComponent} from "./shared/layout/header/header.component";
import {NavbarComponent} from "./shared/layout/navbar/navbar.component";
import {DropdownModule} from "ngx-dropdown";
import {AuthGuard} from "./_guards/auth.guard";
import {AlertService} from "./_services/alert.service";
import {AuthenticationService} from "./_services/authentication.service";
import {UserService} from "./_services/user.service";
import {fakeBackendProvider} from "./_helpers/fake-backend";
import {MockBackend} from "@angular/http/testing";
import {AlertComponent} from "./_directives/alert.component";
import {InstallationService} from "./_services/installation.service";
import {AdminModule} from "./dashboard/admin/admin.module";
import {ServiceModule} from "./dashboard/services-comp/service.module";
import {MasterModule} from "./dashboard/master-page/master.module";
import {HomeModule} from "./home/home.module";
import {SharedModule} from "./shared/shared.module";
import {UserPermissionDirective} from './_directives/has-admin-permission.directive';


@NgModule({
  imports: [
    AdminModule,
    ServiceModule,
    MasterModule,
    HomeModule,
    SharedModule,
    routing,

  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    NavbarComponent,
    AlertComponent,
    UserPermissionDirective

  ],
  providers: [
    InstallationService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
