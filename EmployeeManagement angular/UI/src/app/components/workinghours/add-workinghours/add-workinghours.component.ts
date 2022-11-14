import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkingManagement } from 'src/app/Model/workinghours.model';
import { WorkinghoursService } from 'src/app/services/workinghours.service';

@Component({
  selector: 'app-add-workinghours',
  templateUrl: './add-workinghours.component.html',
  styleUrls: ['./add-workinghours.component.css']
})
export class AddWorkinghoursComponent implements OnInit {

  addWorkingHoursRequest: WorkingManagement={
    id: 0,
    designation: '',
    from: '',
    to: '',
    totalTime: ''
  }

  constructor(private workinghourmanagementService: WorkinghoursService, private router: Router) { }

  ngOnInit(): void {
  }

  addWorkingHours(){
    this.workinghourmanagementService.addWorkingManagement(this.addWorkingHoursRequest)
    .subscribe({
      next:(workinghours)=>{
        this.router.navigate(['time']);
      }
    })
  }

}
