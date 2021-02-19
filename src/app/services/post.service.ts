import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public posts = new Array<Post>();

  private url = "http://localhost:8080/post";

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<any> {
    return this.http.get(`${this.url}`+`/allPosts`);
  }

  save(post: Post): Observable<any> {
    console.log("post in service"+post.namePost);
    return this.http.post(`${this.url}` + `/save`, post)
  }

  delete(id: string): Observable<any> {
    console.log("id to delete in service : " + id)
    return this.http.delete(`${this.url}`+`/delete/${id}`, { responseType: 'text' });
  }
}
