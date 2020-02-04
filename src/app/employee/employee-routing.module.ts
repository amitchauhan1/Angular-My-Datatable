import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddEditModelComponent } from '../shared/add-edit-model/add-edit-model.component';


const routes: Routes = [
  {
    path: 'emp-list',
    component: EmpListComponent,
    children: [
      {
        path: 'add-emp',
        component: AddEditModelComponent
      },
      {
        path: 'edit-emp/:id',
        component: AddEditModelComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'emp-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
