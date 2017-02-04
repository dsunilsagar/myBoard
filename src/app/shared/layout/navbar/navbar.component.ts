import { Component, OnInit } from '@angular/core';
import {User} from "../../../_models/user";
import {AuthenticationService} from './../../../_services/authentication.service';

@Component({
  selector: 'mb-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public isAdmin:boolean = false;

   user: User[];


  constructor(private authenticationService:AuthenticationService) {
  }

  ngOnInit() {

    if(this.authenticationService.user){
      let user:any = this.authenticationService.user;
      if(user.userrole == 'admin'){

        this.isAdmin = true;
      }
    }
    this.authenticationService.getCurrentUserFromLocalStorage().subscribe(user =>{
      if(user.userrole == 'admin'){
        this.isAdmin = true;
      }

    })
  }

}
