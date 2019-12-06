import {Component, OnInit} from '@angular/core';
import {PlanService} from '../../services/plan.service';
import {Plan} from '../../model/plan';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  plans: Plan [];
  plans2: Plan[];

  constructor(private plansService: PlanService) {
    this.plansService.list().subscribe(t => {
      this.plans = t.data.slice(2);
      this.plans2 = t.data.slice(3, 5);
    });
  }

  ngOnInit() {
  }

}
