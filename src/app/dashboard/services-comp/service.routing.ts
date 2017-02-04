import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {InvoiceComponent} from "./invoice-mgmt/invoice.component";
import {AuthorizationComponent} from "./authorizations/authorization.component";


// const adminRoutes: Routes = [
//   {path: 'user-profile', component: UserProfileComponent},
//   {path: 'groups', component: GroupsComponent},
// ];

// export const AdminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);


import { Route } from '@angular/router';


export const ServiceRouting: Route[] = [

  { path: 'auth', component: AuthorizationComponent },
   { path: 'invoice', component: InvoiceComponent },
];


