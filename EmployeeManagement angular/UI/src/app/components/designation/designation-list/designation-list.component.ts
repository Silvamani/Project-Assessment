import { Component, OnInit } from '@angular/core';
import { Designation } from 'src/app/Model/designation.model';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-designation-list',
  templateUrl: './designation-list.component.html',
  styleUrls: ['./designation-list.component.css']
})
export class DesignationListComponent implements OnInit {

  designation: Designation[]=[];

  constructor(private designationService: DesignationService) { }

  ngOnInit(): void {
    this.designationService.getAllDesignations()
    .subscribe({
      next:(designation)=>{
        this.designation=designation;
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }

}
