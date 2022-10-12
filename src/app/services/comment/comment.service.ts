import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  private baseURL = `http://localhost:8080`


  commentEndorsement(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/endorsments/comment-endorsement`, data, {headers: new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ0MGM1NjQ4MjVmNDRkODI4Yjk1OWQiLCJ1c2VyVHlwZSI6IkFkbWluIiwiaWF0IjoxNjY1NTA0NzA3fQ.YAj6lkNRUuyDnHj-CzzOS36fk8gz4rHawXllTlC1gFo')})
    }
}
