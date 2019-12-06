import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  grade = this.getGrade();
  @Input() size;
  @Input() numbers = true;

  randomNumber = Math.floor(Math.random() * 20, 0) + 12;
  constructor() { }

  ngOnInit() {
  }

  getGrade() {
    return Math.floor(Math.random() * 2 + 4, 0);
  }

  mouseOver(n) {
    if(!this.numbers) {
    this.grade = n;
    }
  }
}
