import {Component} from '@angular/core';
import {PlanService} from '../../services/plan.service';
import {Plan} from '../../model/plan';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  plans: Plan[] = [];


  constructor(private plansService: PlanService) {
    this.loadPlans();
  }


  loadPlans() {
    this.plans = this.plansService.list().subscribe(t => {
      this.plans = t.data;
    });
  }

  updateFilters(event: { city: string, category: string }) {
    this.loadPlans();
  }

}
