import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class PostService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.baseUrl);
  }

  getPost(id : number) {
    return this.http.get(this.baseUrl + "/" + id);
  }

  addPost(newPost: any) {
    return this.http.post(this.baseUrl, newPost);
  }

  updatePost(id: number, updatedPost: any) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url, updatedPost);
  }

  deletePost(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
