import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AccountsDataComponent} from "./accounts/accounts.component";

// const adminRoutes: Routes = [
//   {path: 'user-profile', component: UserProfileComponent},
//   {path: 'groups', component: GroupsComponent},
// ];

// export const AdminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);


import { Route } from '@angular/router';


export const MasterRouting: Route[] = [
  { path: 'accounts', component: AccountsDataComponent },

];
