import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  index = 0;
  finished = false;

  steps: [
    {
      question: 'Quel est ton prénom';
      field: 'last_name'
    },
    {
      question: 'Quel est ton nom'
      field: 'first_name'
    },
    {
      question: 'Quand est tu né'
      field: 'birth_date'
    }
  ];


  next() {
    this.index++;
    if (this.index >= this.steps.length) {
      this.finished = true;
    }
  }


}
