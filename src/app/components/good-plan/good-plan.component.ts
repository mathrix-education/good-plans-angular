import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-good-plan',
  templateUrl: './good-plan.component.html',
  styleUrls: ['./good-plan.component.scss']
})
export class GoodPlanComponent implements OnInit {
  @Input() expanded = false;

  constructor() {
  }

  ngOnInit() {
  }

  expand() {
    this.expanded = true;
  }

}
