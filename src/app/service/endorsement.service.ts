import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndorsementService {

  constructor(private http: HttpClient) { }
  
  private baseURL = `https://safe-spire-99671.herokuapp.com`


  getAllPost(): Observable<any> {
    return this.http.get(`${this.baseURL}/commonUsers/get-endorsements?skip=0&limit=10`, {headers: new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM2Yjg5ZDlkZjZiYTFkYjNhMDdlMTAiLCJ1c2VyVHlwZSI6IkFkbWluIiwiaWF0IjoxNjY0NTMwNzUwfQ.6ntPy7ebgcNNF1wHyyFvzE7S2YMnd5Hy5beAdDCyrvU')})
 }

  getAPost(id: any): Observable<any> {
    return this.http.get(`${this.baseURL}/commonUsers/get-endorsement?endorsementId=${id}`, {headers: new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM2Yjg5ZDlkZjZiYTFkYjNhMDdlMTAiLCJ1c2VyVHlwZSI6IkFkbWluIiwiaWF0IjoxNjY0NTMwNzUwfQ.6ntPy7ebgcNNF1wHyyFvzE7S2YMnd5Hy5beAdDCyrvU')})
  }

  updateData(data: any, id: string): Observable<any> {
    return this.http.post(`${this.baseURL}/commonUsers/edit-endorsement`, data)
  }

  deleteData(id: any): Observable<any> {
    return this.http.post(`${this.baseURL}/delete-endorsement`, id)
}

}
