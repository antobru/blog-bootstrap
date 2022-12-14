import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAccessGuard } from './guards/no-access.guard';
import { PasswordGuard } from './guards/password.guard';
import { TestGuard } from './guards/test.guard';
import { Test2Guard } from './guards/test2.guard';
import { HomeComponent } from './pages/home/home.component';
import { PostCommentsComponent } from './pages/post-comments/post-comments.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { PostFormPageComponent } from './pages/post-form-page/post-form-page.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { UserFormPageComponent } from './pages/user-form-page/user-form-page.component';
import { UserSubscriptionComponent } from './pages/user-subscription/user-subscription.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'posts', 
    component: PostsListComponent,
    canActivate: [Test2Guard]
  },
  { path: 'posts/:postId/comments', component: PostCommentsComponent },
  { path: 'posts/:postId', component: PostDetailComponent },
  /*
    Le rotte 'post' e 'post/:id' servono per gestire l'inserimento e
    la modifica dei post.
    Come potete notare entrambe fanno riferimento allo stesso componente
    quindi sarà il componente a verificare su quale rotta si trova e quindi
    a cambiare comportamente in base all'inserimento o alla modifca del post 
  */
  { path: 'post', component: PostFormPageComponent },
  { path: 'post/:id', component: PostFormPageComponent },

  {
    path: 'users',
    component: UsersListComponent,
    canActivate: [PasswordGuard]
  },
  { path: 'user', component: UserFormPageComponent },
  { path: 'user/:id', component: UserFormPageComponent },


  { path: 'users/subscription', component: UserSubscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
