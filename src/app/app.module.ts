import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostCommentsComponent } from './pages/post-comments/post-comments.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { PostFormPageComponent } from './pages/post-form-page/post-form-page.component';
import { UserFormPageComponent } from './pages/user-form-page/user-form-page.component';
import { UserSubscriptionComponent } from './pages/user-subscription/user-subscription.component';
import { PrefixPipe } from './pipes/prefix.pipe';
import { UsersListComponent } from './pages/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsListComponent,
    PostCommentsComponent,
    PostDetailComponent,
    PostFormPageComponent,
    UserFormPageComponent,
    UsersListComponent,
    UserSubscriptionComponent,
    PrefixPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
