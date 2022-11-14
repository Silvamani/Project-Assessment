import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WorkingManagement } from '../Model/workinghours.model';

@Injectable({
  providedIn: 'root'
})
export class WorkinghoursService {

  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllWorkingManagement():Observable<WorkingManagement[]> {
    return this.http.get<WorkingManagement[]>(this.baseApiUrl + '/api/WorkingHours');
  }

  addWorkingManagement(addWorkingManagementRequest: WorkingManagement):Observable<WorkingManagement>{
    return this.http.post<WorkingManagement>(this.baseApiUrl+'/api/WorkingHours',addWorkingManagementRequest);
  }
  getWorkingManagement(id:string):Observable<WorkingManagement>{
    return this.http.get<WorkingManagement>(this.baseApiUrl+'/api/WorkingHours/'+id);
  }
  updateWorkingManagement(id:number, updateWorkingManagementRequest:WorkingManagement): Observable<WorkingManagement>{
    return this.http.put<WorkingManagement>(this.baseApiUrl+'/api/WorkingHours/'+ id, updateWorkingManagementRequest);
  }

  deleteWorkingManagement(id:number):Observable<WorkingManagement>{
    return this.http.delete<WorkingManagement>(this.baseApiUrl+'/api/WorkingHours/'+id);
  }
}
