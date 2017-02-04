import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./mb-home.component";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [HomeComponent],
  providers: [

  ],
})
export class HomeModule {

  constructor() {
  }

}
