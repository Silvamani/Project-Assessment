import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Leave } from '../Model/requestleave.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllLeave():Observable<Leave[]> {
    return this.http.get<Leave[]>(this.baseApiUrl + '/api/RequestLeaves');
  }

  addLeave(addLeaveRequest: Leave):Observable<Leave>{
    return this.http.post<Leave>(this.baseApiUrl+'/api/RequestLeaves',addLeaveRequest);
  }
  getLeave(id:string):Observable<Leave>{
    return this.http.get<Leave>(this.baseApiUrl+'/api/RequestLeaves/'+id);
  }
  updateLeave(id:number, updateLeaveRequest:Leave): Observable<Leave>{
    return this.http.put<Leave>(this.baseApiUrl+'/api/RequestLeaves/'+ id, updateLeaveRequest);
  }

  deleteLeave(id:number):Observable<Leave>{
    return this.http.delete<Leave>(this.baseApiUrl+'/api/RequestLeaves/'+id);
  }
}
