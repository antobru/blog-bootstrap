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

  /*
    La proprietà 'post' sottostante nell'esercizio 2 diventa inutile, in quanto
    serve esclusivamente per passare al componente PostForm l'eventuale Post 
    recuperato dal id passato nella rotta. 
  */
  public post: Post = new Post();
  public successMsg?: string;
  public errorMsg?: string;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    /*
      Nel esercizio 2 il metodo ngOnInt() rimarrebbe vuoto, in quanto
      il codice scritto di seguito servirebbe per riuscire a intercettare 
      il paramentro dalla route e successivamente a recuperare i dati del
      post.
    */

    const postId = this.route.snapshot.params.id;
    if (postId) {
      this.postsService.findPostById(postId)
        .then(res => {
          this.post = res;
        }).catch(err => {
          this.showErrorMessage('Cannot retrive the post with ID ' + postId);
        });
    }
  }

  save(post: Post) {

    /*
      Per l'esercizio 2 basterebbe inserire nella funzione save
      questo codice dato che non deve gestire l'update del post:

      this.postsService.addPost(post)
        .then(result => {
          this.showSuccessMessage('Post inserted!');
        }).catch(err => {
          this.showErrorMessage('Error: Cannot insert the post!');
        });

    */

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

  /**
   * Permette di visualizzare il messaggio di successo
   * @param msg Messaggio di successo
   * @param duration Durata in millisecondi del messaggio mostrato
   */
  showSuccessMessage(msg: string, duration: number = 3000) {
    this.successMsg = msg;
    setTimeout(() => {
      this.successMsg = undefined;
    }, duration);
  }

  /**
   * Permette di visualizzare il messaggio di errore
   * @param msg Messaggio di errore
   * @param duration Durata in millisecondi del messaggio mostrato
   */
  showErrorMessage(msg: string, duration: number = 3000) {
    this.errorMsg = msg;
    setTimeout(() => {
      this.errorMsg = undefined;
    }, duration);
  }

}
