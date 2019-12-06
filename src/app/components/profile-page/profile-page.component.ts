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
  plans3: Plan[];
  plans4: Plan[];

  constructor(private plansService: PlanService) {

  }

  ngOnInit() {
    this.plansService.list().subscribe(t => {
      console.log(t);
      this.plans = [t.data[2]];
      this.plans2 = [t.data[4], t.data[5]];
      this.plans3 = [t.data[0]];
      this.plans4 = [t.data[6], t.data[7]];
      console.log(this);
    });
  }

}
