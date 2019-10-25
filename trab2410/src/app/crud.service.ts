import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
import { Posts } from './posts';

const httpOption = {
  headers : new HttpHeaders({"Content-Type" : "application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  url: "http://localhost:3000/posts"

  constructor(public http: HttpClient) { }

  getAll() : Observable<Posts[]> {
    return this.http.get<Posts[]>(this.url);
  }

  save(post : Posts) : Observable<Posts> {
    return this.http.post<Posts>(this.url, post, httpOption);
  }

  edit(post : Posts) : Observable<Posts> {
    return this.http.put<Posts>(this.url + '/' + post.id, post, httpOption);
  }

  delet(post : Posts) : Observable<Posts> {
    return this.http.delete<Posts>(this.url + '/' + post.id);
  }


}
