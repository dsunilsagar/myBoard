import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {RegisterComponent} from "./mb-register.component";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [RegisterComponent],
    exports: [RegisterComponent]
})

export class RegisterModule { }
