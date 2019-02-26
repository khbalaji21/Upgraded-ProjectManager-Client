import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//added by me
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [
  { path: "add-task", component: AddTaskComponent },
  { path: "view-task", component: ViewTaskComponent },
  { path: "edit-task/:Id", component: EditTaskComponent },
  { path: "add-user", component: AddUserComponent },
  { path: "add-project", component: AddProjectComponent },
  { path: "", redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //added by me
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  //added by me
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
