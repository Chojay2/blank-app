import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest,  } from '@angular/common/http';
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
  return this.http.post(`${this.baseURL}/endorsments/add-endorsement`, data, {headers: new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ0MGM1NjQ4MjVmNDRkODI4Yjk1OWQiLCJ1c2VyVHlwZSI6IkFkbWluIiwiaWF0IjoxNjY1NDk5MTkzfQ.K4XX_II0lJojTOpxypRw0spbg5hgNs5xwfLG7FWqHN0')})
  }

  updateData(data: any, id: string): Observable<any> {
    return this.http.post(`${this.baseURL}/endorsments/edit-endorsement`, data)
  }

  deleteData(id: any): Observable<any> {
    return this.http.post(`${this.baseURL}/delete-endorsement`, id)
}

  addGallery(data: any, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', data.title);
    formData.append('description', data.description);
    const header = new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ0MGM1NjQ4MjVmNDRkODI4Yjk1OWQiLCJ1c2VyVHlwZSI6IkFkbWluIiwiaWF0IjoxNjY1NDg0NjM4fQ.WLCIKyLcnSfm1nyPotqH3VwbBmayyXFJidXsWJYyPc0');
    const params = new HttpParams();

    const options = {
      params,
      reportProgress: true,
      headers: header
    };
    
    const req = new HttpRequest('POST', `${this.baseURL}/endorsments/add-endorsement`, formData, options);
    return this.http.request(req);
  }

}
