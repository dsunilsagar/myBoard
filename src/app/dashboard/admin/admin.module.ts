import {NgModule} from '@angular/core';
import {UserProfileComponent} from "./user-profiles/user-profiles.component";
import {GroupsComponent} from "./groups/groups.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    UserProfileComponent,
    GroupsComponent,
  ],
  imports: [
    RouterModule,
     BrowserModule,
  ],
  exports: [UserProfileComponent, GroupsComponent],
  providers: [

  ],
})
export class AdminModule {

  constructor() {
  }

}
