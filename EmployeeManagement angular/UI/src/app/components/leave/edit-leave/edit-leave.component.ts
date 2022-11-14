import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Leave } from 'src/app/Model/requestleave.model';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-edit-leave',
  templateUrl: './edit-leave.component.html',
  styleUrls: ['./edit-leave.component.css']
})
export class EditLeaveComponent implements OnInit {

  leaveDetails: Leave={
    id: 0,
    empName: '',
    from: undefined,
    to: undefined,
    cause: ''
  };

  constructor(private route: ActivatedRoute, private leaveService:LeaveService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id= params.get('id');
        if(id){
          this.leaveService.getLeave(id)
          .subscribe({
            next:(response)=>{
              this.leaveDetails=response;
            }
          });
        }
      }
    })
  }

  updateLeave(){
    this.leaveService.updateLeave(this.leaveDetails.id, this.leaveDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['lev']);
      }
    });
  }

  deleteLeave(id:number){
    this.leaveService.deleteLeave(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['lev']);
      }
    })
  }

}
