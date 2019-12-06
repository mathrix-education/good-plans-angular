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

  model = {first_name: '', last_name: '', birth_date: '', city: ''};


  steps = [
    {
      first: 'Pour commencer, dis nous-en plus sur toi !',
      question: 'Où habites-tu?',
      field: 'city'
    },
    {
      first: 'Une carte "moins de 30 ans" ou "12-27", ça te dit ?',
      question: 'Entre ton année de naissance',
      field: 'birth_date'
    },
    {
      first: 'Allez, soyons intime',
      question: 'Quel est ton prénom ?',
      field: 'username'
    },
    {
      first: '',
      question: 'C\'est parti!',
      field: ''
    }
  ];

  constructor(private router: Router) {
  }

  next() {
    if (!this.finished) {
      this.index++;
      if (this.index >= this.steps.length - 1) {
        this.finished = true;
      }
    }
    console.log(this.model);
  }

  register() {
    this.router.navigate(['/app', 'profil']);
  }

  saveCity(city: string) {
    this.index++;
    this.model.city = city;
  }


}
