import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-form-page',
  templateUrl: './post-form-page.component.html',
  styleUrls: ['./post-form-page.component.scss']
})
export class PostFormPageComponent implements OnInit {

  public post: Post = new Post();

  successMsg?: string;
  errorMsg?: string;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.params.id;
    if (postId) {
      this.postsService.findPostById(postId)
        .then(res => {
          this.post = res;
        }).catch(err => {

        });
    }
  }

  showSuccessMessage(msg: string, duration: number = 3000) {
    this.successMsg = msg;
    setTimeout(() => {
      this.successMsg = undefined;
    }, duration);
  }

  showErrorMessage(msg: string, duration: number = 3000) {
    this.errorMsg = msg;
    setTimeout(() => {
      this.errorMsg = undefined;
    }, duration);
  }

  save(post: Post) {
    if (!post.id) {
      this.postsService.addPost(post)
        .then(result => {
          this.showSuccessMessage('Post inserted!');
        }).catch(err => {
          this.showErrorMessage('Error: Cannot insert the post!');
        });
      return;
    }
    this.postsService.updatePost(post.id, post)
      .then(result => {
        this.showSuccessMessage('Post updated!');
      }).catch(err => {
        this.showErrorMessage('Error: Cannot update the post!');
      });
  }

}
