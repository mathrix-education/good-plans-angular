import {Component, OnInit} from '@angular/core';
import {PlanService} from '../../services/plan.service';
import {Plan} from '../../model/plan';
import {ActivatedRoute} from '@angular/router';
import {CityType} from '../../model/user';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  plans: Plan[] = [];
  displayedPlans = [];


  constructor(private plansService: PlanService, private route: ActivatedRoute) {
    this.loadPlans();
    route.queryParams.subscribe(p => {
      if (p.category) {
        this.filtersPlansOnCategory(p.category);
      } else if (p.city) {
        this.filtersPlansOnCity(p.city);
      }
    });
  }

  loadPlans() {
    this.plans = this.plansService.list().subscribe(t => {
      this.plans = t.data;
      this.displayedPlans = t.data;
    });
  }

  filtersPlansOnCity(city: CityType) {
    this.displayedPlans = this.plans.filter(plan => plan.cities.includes(city));
  }


  filtersPlansOnCategory(category) {
    this.displayedPlans = this.plans.filter(plan => plan.categories.includes(category));
  }
}
