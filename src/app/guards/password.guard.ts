import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggerService } from '../services/logger.service';


@Injectable({
  providedIn: 'root'
})
export class PasswordGuard implements CanActivate {

  constructor(private http: HttpClient, private logger: LoggerService, private router: Router) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    let psw: string = '';
    const PASSWORD = await this.http.get<{ password: string }>('http://localhost:3000/passwords/1').toPromise();
    if (sessionStorage.getItem('password')) {
      psw = sessionStorage.getItem('password') || '';
    } else {
      psw = prompt('Inserisci la password per poter accedere alla pagina') || '';
    }
    

    if (psw == PASSWORD.password) {
      sessionStorage.setItem('password', psw);
      return true;
    }

    sessionStorage.removeItem('password');
    alert("La password non è corretta");
    this.logger.log('La password è stata sbagliata in data: ' + (new Date()));
    // window.location.href = '/';
    this.router.navigateByUrl('/');
    return false;
  }

}
