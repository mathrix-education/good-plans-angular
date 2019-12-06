import {Component} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filter = {city: '', category: 'santé'};

  categories = [
    {name: 'Santé', icon: 'heart'},
    {name: 'Logement', icon: 'home'},
    {name: 'Transport', icon: 'car'},
    {name: 'Alimentation', icon: 'fish'},
    {name: 'Sorties', icon: 'happy-face'},
    {name: 'Scolaires', icon: 'flask'},
  ];

  cities = [
    {name: 'Grenoble', icon: 'map-marker'},
    {name: 'Paris', icon: 'map-marker'},
  ];

  showMenuCategory = false;
  showMenuCities = false;

  toggleCategory() {
    this.showMenuCategory = !this.showMenuCategory;
    this.showMenuCities = false;
  }

  toggleCities() {
    this.showMenuCities = !this.showMenuCities;
    this.showMenuCategory = false;
  }
}
