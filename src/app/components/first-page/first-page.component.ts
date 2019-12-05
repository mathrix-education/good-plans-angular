import {Component} from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {
  opened = false;

  form = {username: '', password: ''};


  login() {
    console.log(this.form);
  }


}
