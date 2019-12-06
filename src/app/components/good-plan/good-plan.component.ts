import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-good-plan',
  templateUrl: './good-plan.component.html',
  styleUrls: ['./good-plan.component.scss']
})
export class GoodPlanComponent implements OnInit {
  @Input() expanded = false;
  @Input() mini = false;

  title = 'La carte jeune te permet d\'économiser 50% sur les trajets de train SNCF.';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  expand() {
    this.expanded = true;
  }

  selectCard() {
    console.log('select card');
    this.router.navigate(['/app/modal']);
  }

}
