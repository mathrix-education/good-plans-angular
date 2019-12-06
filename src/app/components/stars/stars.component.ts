import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  numbers = [0,1,2,3,4];
  @Input() size;
  constructor() { }

  ngOnInit() {
  }

}
