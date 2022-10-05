import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  findAll$() {
    return this.http.get<User[]>(environment.BASE_API + '/users');
  }

  findAll() {
    return this.http.get<User[]>(environment.BASE_API + '/users').toPromise();
  }

  findById(id: number) {
    return this.http.get<User>(environment.BASE_API + '/users/' + id).toPromise();
  }

  create(user: User) {
    return this.http.post<User>(`${environment.BASE_API }/users`, user).toPromise();
  }

  update(id: number, user: User) {
    return this.http.put<User>(`${environment.BASE_API }/users/${id}`, user).toPromise();
  }

  delete(id: number) {
    return this.http.delete<User>(`${environment.BASE_API }/users/${id}`).toPromise();
  }

}
