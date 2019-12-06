import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-good-plan',
  templateUrl: './good-plan.component.html',
  styleUrls: ['./good-plan.component.scss']
})
export class GoodPlanComponent implements OnInit {
  expanded = false;
  @Input() withReview = false;
  @Input() withRequirements = false;

  constructor() {
  }

  ngOnInit() {
  }

  expand() {
    this.expanded = true;
  }

}
