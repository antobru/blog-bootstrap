import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

const PASSWORD = '123456';

@Injectable({
  providedIn: 'root'
})
export class Test2Guard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let psw= '';
    if (sessionStorage.getItem('password')) {
      psw = sessionStorage.getItem('password') || '';
    } else {
      psw = prompt("Inserisci password") || '';
    }

    if (psw == PASSWORD) {
      sessionStorage.setItem('password', psw);
      return true
    }

    sessionStorage.removeItem('password');

    return false;
  }

}
