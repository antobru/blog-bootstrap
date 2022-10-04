import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

  findPostById(id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`).toPromise();
  }

  findAllCommentsByPostId(postId: number) {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).toPromise();
  }

  addPost(post: Post) {
    return this.http.post<Post[]>(`https://jsonplaceholder.typicode.com/posts`, post).toPromise();
  }

  updatePost(id: number, post: Post) {
    return this.http.put<Post[]>(`https://jsonplaceholder.typicode.com/posts/${id}`, post).toPromise();
  }

}
