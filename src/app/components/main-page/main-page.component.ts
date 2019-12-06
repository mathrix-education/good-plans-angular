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
      console.log(p, 'pp');
      if (p.category) {
        this.filtersPlansOnCategory(p.category);
      } else if (p.city) {
        this.filtersPlansOnCity(p.city);
      } else {
        console.log('do nothing');
      }
    });
  }

  loadPlans() {
    this.plans = this.plansService.list().subscribe(t => {
      this.plans = t.data;
      this.displayedPlans = t.data;
      console.log('loaded', this.displayedPlans);
    });
  }

  filtersPlansOnCity(city: CityType) {
    console.log(city, 'ccc');
    this.displayedPlans = this.plans.filter(plan => {
      console.log(plan.city);
      return plan.city === city;
    });
    console.log('loadedgg', this.displayedPlans);
  }


  filtersPlansOnCategory(category) {
    console.log(category, 'categorY');
    this.displayedPlans = this.plans.filter(plan => {
      console.log(plan.category);
      return plan.category === category;
    });
    console.log('loadedg52', this.displayedPlans);
  }
}
