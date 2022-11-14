import { Component, OnInit } from '@angular/core';
import { WorkingManagement } from 'src/app/Model/workinghours.model';
import { WorkinghoursService } from 'src/app/services/workinghours.service';

@Component({
  selector: 'app-workinghours-list',
  templateUrl: './workinghours-list.component.html',
  styleUrls: ['./workinghours-list.component.css']
})
export class WorkinghoursListComponent implements OnInit {

  workingmanagement: WorkingManagement[]=[];
    searchText:any;

    EmployeeNameFilter: string="";
    EmployeeWithoutFilter:any=[];

  constructor(private workinghoursService: WorkinghoursService) { }

  ngOnInit(): void {
    this.workinghoursService.getAllWorkingManagement()
    .subscribe({
      next:(workingmanagement)=>{
        this.workingmanagement=workingmanagement;
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }

}
