import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public viewMode: 'list' | 'cards' = 'cards';
  public posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  async ngOnInit(): Promise<void> {

    // this.postsService.findAll().then(result => {
    //   this.posts = result;
    //   console.log(result);
    // });

    /*
      
    */
    try {
      this.posts = await this.postsService.findAll();
    } catch (error) {
      alert("Non è stato possibile recuperare la lista dei post");
    }

  }

}
