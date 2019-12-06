import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Plan} from '../../model/plan';
import {PlanService} from '../../services/plan.service';

@Component({
  selector: 'app-good-plan-modal',
  templateUrl: './good-plan-modal.component.html',
  styleUrls: ['./good-plan-modal.component.scss']
})
export class GoodPlanModalComponent implements OnInit {

  step = 1;

  remark: string;

  plan: Plan;

  constructor(
    private router: Router,
    private planService: PlanService
  ) {

  }

  ngOnInit() {
    console.log(this.planService.selectedPlan);
    this.plan = this.planService.selectedPlan;
  }

  close() {
    this.router.navigate(['/app/profil']);
  }

}
