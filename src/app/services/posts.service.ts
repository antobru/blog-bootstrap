import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Post[]>(environment.BASE_API + '/posts').toPromise();
  }

  findPostById(id: number) {
    return this.http.get<Post>(`${environment.BASE_API}/posts/${id}`).toPromise();
  }

  findAllCommentsByPostId(postId: number) {
    return this.http.get<Comment[]>(`${environment.BASE_API}/posts/${postId}/comments`).toPromise();
  }

  addPost(post: Post) {
    return this.http.post<Post[]>(`${environment.BASE_API}/posts`, post).toPromise();
  }

  updatePost(id: number, post: Post) {
    return this.http.put<Post[]>(`${environment.BASE_API}/posts/${id}`, post).toPromise();
  }

}
