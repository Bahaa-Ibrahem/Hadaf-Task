import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getAllPosts() {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

  getPost(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
