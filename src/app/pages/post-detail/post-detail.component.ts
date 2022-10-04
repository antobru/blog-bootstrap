import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  public post?: Post;
  public postId?: number;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    // Recuperiamo il paramentro postId dalla rotta
    this.postId = this.route.snapshot.params.postId;

    if (this.postId != undefined) {
      this.postsService.findPostById(this.postId)
        .then(result => {
          this.post = result;
        });
    }

  }

}
