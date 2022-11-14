import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Designation } from 'src/app/Model/designation.model';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent implements OnInit {

  addDesignationRequest: Designation={
    id: 0,
    designationName: '',
    roleName: '',
    department: ''
  }

  constructor(private designationService: DesignationService, private router: Router) { }

  ngOnInit(): void {
  }

  addDesignation(){
    this.designationService.addDesignation(this.addDesignationRequest)
    .subscribe({
      next:(designation)=>{
        this.router.navigate(['deg']);
      }
    })
  }

}
