import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

const PASSWORD = '123456';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let psw = '';
      if (sessionStorage.getItem('password')) {
        psw = sessionStorage.getItem('password') || '';
      } else {
        psw = prompt("Inserisci password") || '';
      }

      if (psw == PASSWORD) {
        sessionStorage.setItem('password', psw);
        return true;
      }

      sessionStorage.removeItem('password');
      return false;
  }

}
