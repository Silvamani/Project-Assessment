import { WorkingManagement } from 'src/app/Model/workinghours.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkinghoursService } from 'src/app/services/workinghours.service';

@Component({
  selector: 'app-edit-workinghours',
  templateUrl: './edit-workinghours.component.html',
  styleUrls: ['./edit-workinghours.component.css']
})
export class EditWorkinghoursComponent implements OnInit {

  workinghoursmanagementDetails: WorkingManagement={
    id: 0,
    designation: '',
    from: '',
    to: '',
    totalTime: ''
  };

  constructor(private route: ActivatedRoute, private workinghoursmanagementService:WorkinghoursService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id= params.get('id');
        if(id){
          this.workinghoursmanagementService. getWorkingManagement(id)
          .subscribe({
            next:(response)=>{
              this.workinghoursmanagementDetails=response;
            }
          });
        }
      }
    })
  }
  updateWorkinghours(){
    this.workinghoursmanagementService.updateWorkingManagement(this.workinghoursmanagementDetails.id, this.workinghoursmanagementDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['time']);
      }
    });
  }

 

  deleteWorkinghours(id:number){
    this.workinghoursmanagementService.deleteWorkingManagement(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['time']);
      }
    })
  }


}
