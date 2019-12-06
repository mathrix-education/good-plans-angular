import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserService} from '../app/services/user.service';
import {AuthenticationService} from '../app/services/authentication.service';
import {tap} from 'rxjs/operators';
import {DataResponse} from '@mathrix-education/iridium';
import {User} from '../app/model/user';

export class LoginResolver implements Resolve<any> {


  constructor(private userService: UserService, private authService: AuthenticationService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    if (this.authService.isLogged()) {
      const id = localStorage.getItem('userId');
      console.log(id);
      return this.userService.read(id).pipe(tap((response: DataResponse<User>) => {
        this.authService.user = response.data;
        this.router.navigate(['/app']);
      }));
    } else {
      console.log('out');
      return of(true);
    }
  }

}
