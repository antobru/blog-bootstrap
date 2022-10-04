import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  /*
    Il @Input() è necessario affinchè il componente PostForm possa accettare
    un oggetto di tipo Post da un componente padre. In questo modo è possibile 
    utilizzare PostForm sia per inserire dei Post sia per modificarli.
    @Input() quindi è necessario per risolvere l'esercizio 3 del 04.10.2022, per
    l'esercizio 2 invece sarebbe bastato la riga sottostante al posto della riga 
    con il @Input.
  */
  // public post: Post = new Post();
  @Input() post: Post = new Post();

  /* 
    Tramite il @Output() possiamo gestire l'evento del salvataggio del form.
    Come risposta all'evento, viene restituito l'oggetto Post modificato dal
    form.
  */
  @Output() save: EventEmitter<Post> = new EventEmitter();

  public users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.findAll().then(res => {
      this.users = res;
    });
  }

  saveFn() {
    /* 
      Utilizzando 'save.emit(this.post)' stiamo emettendo l'evento del salvataggio del
      form che può essere ascoltato al di fuori del componente tramite l'evento 
      (save)="..."
    */
    this.save.emit(this.post);
  }

}
