import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from '../Models/Announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private url = "http://localhost:8080/announcement";

  constructor(
    private http: HttpClient
  ) { }

  getAnnouncements(): Observable<any> {
    return this.http.get(`${this.url}`+`/allAnnouncements`);
  }

  addAnnouncement(announcement: Announcement): Observable<any> {
    return this.http.post(`${this.url}` + `/save`, announcement);
  }
  
}
