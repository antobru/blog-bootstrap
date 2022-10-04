import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Comment } from "../../models/comment.model";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {

  public postId?: number;
  public comments: Comment[] = [];

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.params.postId;
    if (this.postId) {
      this.postsService.findAllCommentsByPostId(this.postId).then(result => this.comments = result);
    }
  }

}
