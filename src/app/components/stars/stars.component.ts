import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  grade = 4.5;
  @Input() size;
  @Input() numbers = true;
  constructor() { }

  ngOnInit() {
  }

  mouseOver(n) {
    if(!this.numbers) {
    this.grade = n;
    }
  }
}
