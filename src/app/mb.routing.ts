import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {DashboardComponent} from "./dashboard/dahshboard.component";
import {AuthGuard} from "./_guards/auth.guard";
import {AdminRouting} from "./dashboard/admin/admin.routing";
import {ServiceRouting} from "./dashboard/services-comp/service.routing";
import {MasterRouting} from "./dashboard/master-page/master.routing";
import {HomeRouting} from "./home/home.routing";

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      ...HomeRouting,
      ...AdminRouting,
      ...ServiceRouting,
       ...MasterRouting
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


  // otherwise redirect to login
  { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
