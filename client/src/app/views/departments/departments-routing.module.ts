import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsListComponent } from './departments-list/departments-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Departments'
    },
    children: [
      {
        path: '',
        redirectTo: 'departments-list'
      },
      {
        path: 'departments-list',
        component: DepartmentsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
