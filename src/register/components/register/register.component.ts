import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  index = 0;
  finished = false;

  model = {first_name: '', last_name: '', birth_date: ''};


  steps = [
    {
      question: 'Quel est ton prénom',
      field: 'last_name'
    },
    {
      question: 'Quel est ton nom',
      field: 'first_name'
    },
    {
      question: 'Quand est tu né',
      field: 'birth_date'
    }
  ];

  constructor(private router: Router) {
  }

  next() {
    this.index++;
    if (this.index >= this.steps.length) {
      this.finished = true;
      console.log(this.model);
    }
  }

  register() {
    this.router.navigate(['/mes-bons-plans']);
  }


}
