import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {InvoiceComponent} from "./invoice-mgmt/invoice.component";
import {AuthorizationComponent} from "./authorizations/authorization.component";


@NgModule({
  declarations: [
    AuthorizationComponent,
    InvoiceComponent,
  ],
  imports: [
    RouterModule
  ],
  exports: [ AuthorizationComponent,
    InvoiceComponent,
],
  providers: [

  ],
})
export class ServiceModule {

  constructor() {
  }

}
