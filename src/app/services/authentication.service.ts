import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user;

  constructor(private htp: HttpClient) {
  }

  isLogged() {
    return true;
  }

  login() {
  }
}
