import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { DesignationComponent } from './components/designation/designation.component';
import { DesignationListComponent } from './components/designation/designation-list/designation-list.component';
import { AddDesignationComponent } from './components/designation/add-designation/add-designation.component';
import { EditDesignationComponent } from './components/designation/edit-designation/edit-designation.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { LeaveComponent } from './components/leave/leave.component';
import { AddLeaveComponent } from './components/leave/add-leave/add-leave.component';
import { LeaveListComponent } from './components/leave/leave-list/leave-list.component';
import { EditLeaveComponent } from './components/leave/edit-leave/edit-leave.component';
import{Ng2SearchPipeModule}from 'ng2-search-filter';
import { WorkinghoursComponent } from './components/workinghours/workinghours.component';
import { AddWorkinghoursComponent } from './components/workinghours/add-workinghours/add-workinghours.component';

import { EditWorkinghoursComponent } from './components/workinghours/edit-workinghours/edit-workinghours.component';
import { WorkinghoursListComponent } from './components/workinghours/workinghours-list/workinghours-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    DesignationComponent,
    DesignationListComponent,
    AddDesignationComponent,
    EditDesignationComponent,
    EmployeeComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    LeaveComponent,
    AddLeaveComponent,
    LeaveListComponent,
    EditLeaveComponent,
    WorkinghoursComponent,
    AddWorkinghoursComponent,
    WorkinghoursListComponent,
    EditWorkinghoursComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
  ],
  providers: [
    AuthService,
   
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
