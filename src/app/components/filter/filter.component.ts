import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  categories = [
    {name: 'Santé', icon: 'heart'},
    {name: 'Logement', icon: 'home'},
    {name: 'Transports', icon: 'car'},
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


  selectedCategory: any;
  selectedCity: any;


  constructor(private router: Router){}

  toggleCategory() {
    this.showMenuCategory = !this.showMenuCategory;
    this.showMenuCities = false;
  }

  toggleCities() {
    this.showMenuCities = !this.showMenuCities;
    this.showMenuCategory = false;
  }

  selectCategory(category) {
    this.selectedCategory = category;
    this.showMenuCategory = false;
    this.router.navigate([], {queryParams: {category: category.name}});
  }

  selectCity(city) {
    this.selectedCity = city;
    this.showMenuCities = false;

    this.router.navigate([], {queryParams: {city: city.name}});
  }
}
