import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthTokenName} from '@mathrix-education/iridium';

@Injectable()
export class BearerTokenInterceptor implements HttpInterceptor {

  constructor(@Inject(AuthTokenName) private authTokenName: string) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(localStorage.getItem(this.authTokenName), 'tokenize');
    const token = localStorage.getItem(this.authTokenName);

    if (!token) {
      return next.handle(request);
    }

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(request);
  }
}
