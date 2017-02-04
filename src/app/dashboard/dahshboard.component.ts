import {Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'mb-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements  OnInit {
  model: any = {};


  constructor(private router:Router) {

  }

  ngOnInit(){

  }



}
