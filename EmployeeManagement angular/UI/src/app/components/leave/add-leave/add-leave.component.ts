import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Leave } from 'src/app/Model/requestleave.model';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent implements OnInit {

  addLeaveRequest: Leave={
    id: 0,
    empName: '',
    from: undefined,
    to: undefined,
    cause: ''
  }

  constructor(private leaveService: LeaveService, private router: Router) { }

  ngOnInit(): void {
  }

  addLeave(){
    this.leaveService.addLeave(this.addLeaveRequest)
    .subscribe({
      next:(leave)=>{
        this.router.navigate(['lev']);
      }
    })
  }

}
