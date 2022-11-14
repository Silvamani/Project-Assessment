import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Designation } from '../Model/designation.model';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllDesignations():Observable<Designation[]> {
    return this.http.get<Designation[]>(this.baseApiUrl + '/api/Designations');
  }

  addDesignation(addDesignationRequest: Designation):Observable<Designation>{
    return this.http.post<Designation>(this.baseApiUrl+'/api/Designations',addDesignationRequest);
  }
  getDesignation(id:string):Observable<Designation>{
    return this.http.get<Designation>(this.baseApiUrl+'/api/Designations/'+id);
  }
  updateDesignation(id:number, updateDesignationRequest:Designation): Observable<Designation>{
    return this.http.put<Designation>(this.baseApiUrl+'/api/Designations/'+ id, updateDesignationRequest);
  }

  deleteDesignation(id:number):Observable<Designation>{
    return this.http.delete<Designation>(this.baseApiUrl+'/api/Designations/'+id);
  }
}
