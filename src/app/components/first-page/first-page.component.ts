import {Component} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {
  opened = false;

  form = {username: '', password: ''};


  constructor(private authentication: AuthenticationService) {
  }

  login() {
    console.log(this.form);
  }


}
