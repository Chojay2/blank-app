import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetitionService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:8080`


  getAllPost(): Observable<any> {
    return this.http.get(`${this.baseURL}/public-petitions/get-petitions?skip=0&limit=20`)
 }

 getAPost(id: any): Observable<any> {
  return this.http.get(`${this.baseURL}/public-petitions/get-petition?petitionId=${id}`)
}

  postSignature(data: any): Observable<any> {
  return this.http.post(`${this.baseURL}/petitions/sign-petition`, data, {headers: new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ0MGM1NjQ4MjVmNDRkODI4Yjk1OWQiLCJ1c2VyVHlwZSI6IkFkbWluIiwiaWF0IjoxNjY1NDk5MTkzfQ.K4XX_II0lJojTOpxypRw0spbg5hgNs5xwfLG7FWqHN0')})
  }

  updateData(data: any, id: string): Observable<any> {
    return this.http.post(`${this.baseURL}/petitions/edit-petition`, data)
  }

  deleteData(id: any): Observable<any> {
    return this.http.post(`${this.baseURL}/delete-petition`, id, {headers: new HttpHeaders().set('Authorization', `${localStorage.getItem("token")}`)})
}

  addGallery(data: any, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', data.title);
    formData.append('goal', data.goal);
    formData.append('description', data.description);
    const header = new HttpHeaders().set('Authorization', `${localStorage.getItem("token")}`);
    const params = new HttpParams();

    const options = {
      params,
      reportProgress: true,
      headers: header
    };

    const req = new HttpRequest('POST', `${this.baseURL}/petitions/add-petition`, formData, options);
    return this.http.request(req);
  }
}
