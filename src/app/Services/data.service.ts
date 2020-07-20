import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

  getPost(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  removePost(id) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  updatePost(form) {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${form.id}`, form);
  }
}
