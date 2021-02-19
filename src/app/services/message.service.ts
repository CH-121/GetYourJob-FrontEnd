import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private url = "http://localhost:8082/message";

  constructor(
    private http: HttpClient
  ) { }

  getMessages(id: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8082/message');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST');
    return this.http.get(`${this.url}`+`/findAllByIdUser/${id}`, 
    {
      headers: headers
    });
  }

}
