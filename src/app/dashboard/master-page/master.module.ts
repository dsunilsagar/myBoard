import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AccountsDataComponent} from "./accounts/accounts.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    AccountsDataComponent,
  ],
  imports: [
    RouterModule,
     FormsModule,
     BrowserModule,
  ],
  exports: [AccountsDataComponent],
  providers: [
  ],
})
export class MasterModule {

  constructor() {
  }

}
