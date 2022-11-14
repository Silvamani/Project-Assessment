import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/Model/requestleave.model';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {

  leave: Leave[]=[];

  constructor(private leaveService: LeaveService) { }

  ngOnInit(): void {
    this.leaveService.getAllLeave()
    .subscribe({
      next:(leave)=>{
        this.leave=leave;
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }

}
