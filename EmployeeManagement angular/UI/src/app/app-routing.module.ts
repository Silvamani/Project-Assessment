import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDesignationComponent } from './components/designation/add-designation/add-designation.component';
import { DesignationComponent } from './components/designation/designation.component';
import { EditDesignationComponent } from './components/designation/edit-designation/edit-designation.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';

import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { EmployeeComponent } from './components/employee/employee.component';



import { HomeComponent } from './components/home/home.component';
import { AddLeaveComponent } from './components/leave/add-leave/add-leave.component';
import { EditLeaveComponent } from './components/leave/edit-leave/edit-leave.component';
import { LeaveComponent } from './components/leave/leave.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { AddWorkinghoursComponent } from './components/workinghours/add-workinghours/add-workinghours.component';
import { EditWorkinghoursComponent } from './components/workinghours/edit-workinghours/edit-workinghours.component';
import { WorkinghoursComponent } from './components/workinghours/workinghours.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard]  
  },
  
  {
    path:'h',
    component:HomeComponent
  },
  {
    path:'deg',
    component:DesignationComponent
  },
  {
    path:'deg/add',
    component:AddDesignationComponent
  },
  {
    path:'deg/deg/edit/:id',
    component:EditDesignationComponent
  },
  {
    path:'emp',
    component:EmployeeComponent
  },
  {
    path:'emp/emp/edit/:id',
    component:EditEmployeeComponent
  },
  {
    path:'emp/add',
    component:AddEmployeeComponent
  },
  {
    path:'lev',
    component:LeaveComponent
  },
  {
    path:'lev/lev/edit/:id',
    component:EditLeaveComponent
  },
  {
    path:'lev/add',
    component:AddLeaveComponent
  },
  {
    path:'time',
    component:WorkinghoursComponent
  },
  {
    path:'time/add',
    component:AddWorkinghoursComponent
  },
  {
    path:'time/time/edit/:id',
    component:EditWorkinghoursComponent
  },
 
  {
    path:'**',
    component:PageNotFoundComponent
  },
];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
