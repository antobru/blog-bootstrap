import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostCommentsComponent } from './pages/post-comments/post-comments.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/:postId/comments', component: PostCommentsComponent },
  { path: 'posts/:postId', component: PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
