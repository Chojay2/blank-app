import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndorsementService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:8080`


  getAllPost(): Observable<any> {
    return this.http.get(`${this.baseURL}/public-endorsments/get-endorsements?skip=0&limit=10`)
 }

 getAPost(id: any): Observable<any> {
  return this.http.get(`${this.baseURL}/public-endorsments/get-endorsement?endorsementId=${id}`)
}

  uploadAPost(data: any): Observable<any> {
  return this.http.post(`${this.baseURL}/endorsments/add-endorsement`, data, {headers: new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ0MGM1NjQ4MjVmNDRkODI4Yjk1OWQiLCJ1c2VyVHlwZSI6IkFkbWluIiwiaWF0IjoxNjY1NDY2OTkzfQ.kBd7wyAcaT3pTwgii6dTcCOS8-ovlhkh9vSJW_KF08M')})
  }

  updateData(data: any, id: string): Observable<any> {
    return this.http.post(`${this.baseURL}/endorsments/edit-endorsement`, data)
  }

  deleteData(id: any): Observable<any> {
    return this.http.post(`${this.baseURL}/delete-endorsement`, id)
}

}
