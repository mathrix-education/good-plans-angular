import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthTokenName, BaseUrl, DataResponse} from '@mathrix-education/iridium';
import {switchMap, tap} from 'rxjs/operators';
import {UserService} from './user.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /** the logged user */
  user;

  private jwt = new JwtHelperService();

  constructor(private htp: HttpClient, private userService: UserService, @Inject(AuthTokenName) private authToken, @Inject(BaseUrl) private baseUrl
  ) {
  }

  isLogged() {
    return localStorage.getItem(this.authToken) !== null && localStorage.getItem(this.authToken) !== undefined;
  }

  logout() {
    localStorage.clear();
    this.user = undefined;
  }


  login(body: { email: string, password: string }) {
    return this.htp.post(`${this.baseUrl}/auth/login`, body).pipe(tap((dataResponse: DataResponse<{ token: string }>) => {
        localStorage.setItem(this.authToken, dataResponse.data.token);
        localStorage.setItem('userId', this.jwt.decodeToken(dataResponse.data.token).sub);
      }),
      switchMap((response: DataResponse<{ token: string }>) => {
        return this.userService.read(this.jwt.decodeToken(response.data.token).sub);
      }));
  }

}
