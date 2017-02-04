import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserProfileComponent} from "./user-profiles/user-profiles.component";
import {GroupsComponent} from "./groups/groups.component";


// const adminRoutes: Routes = [
//   {path: 'user-profile', component: UserProfileComponent},
//   {path: 'groups', component: GroupsComponent},
// ];

// export const AdminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);


import { Route } from '@angular/router';


export const AdminRouting: Route[] = [
  {
    path: 'users-profile',
    component: UserProfileComponent
  },
  {path: 'groups', component: GroupsComponent},
];
