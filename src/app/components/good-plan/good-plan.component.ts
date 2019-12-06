import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-good-plan',
  templateUrl: './good-plan.component.html',
  styleUrls: ['./good-plan.component.scss']
})
export class GoodPlanComponent implements OnInit {
  @Input() expanded = false;
  @Input() mini = false;

  title = 'La carte jeune te permet d\'économiser 50% sur les trajets de train SNCF.';

  constructor() {
  }

  ngOnInit() {
  }

  expand() {
    this.expanded = true;
  }

}
