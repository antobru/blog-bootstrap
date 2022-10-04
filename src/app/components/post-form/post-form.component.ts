import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/post.model';

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

  constructor() { }

  ngOnInit(): void {
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
