import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Plan} from '../../model/plan';

@Component({
  selector: 'app-good-plan',
  templateUrl: './good-plan.component.html',
  styleUrls: ['./good-plan.component.scss']
})
export class GoodPlanComponent implements OnInit {
  @Input() expanded = false;
  @Input() mini = false;
  @Input() stopClick = false;
  @Input() plan: any = {
    title: 'La carte jeune',
    description: 'La carte jeune te permet d\'économiser 50% sur les trajets de train SNCF.',
  };

  category: any;

  categories = [
    {name: 'Santé', icon: 'heart'},
    {name: 'Logement', icon: 'home'},
    {name: 'Transports', icon: 'car'},
    {name: 'Alimentation', icon: 'fish'},
    {name: 'Sorties', icon: 'happy-face'},
    {name: 'Scolaires', icon: 'flask'},
  ];
  constructor(private router: Router) {
  }

  ngOnInit() {

    this.category = this.categories.find(categ => categ.name === this.plan.category);
  }

  expand() {
    this.expanded = true;
  }

  goToCategory() {
    this.router.navigate(['/app/profil'], {queryParams: {category: 'Transport'}});
  }

  selectCard() {
    if(!this.stopClick) {
    this.router.navigate(['/app/modal']);
    }
  }

}
