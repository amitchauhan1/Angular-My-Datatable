import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpListComponent } from './emp-list/emp-list.component';
import { SharedModule } from '../shared/shared.module';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [EmpListComponent, HelpComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ],
  exports: [EmpListComponent]
})
export class EmployeeModule { }
