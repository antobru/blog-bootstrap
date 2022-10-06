import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }


  log(message: string) {
    console.log(message);
    // Invia una chiamata al server per salvare il log
  }

}
