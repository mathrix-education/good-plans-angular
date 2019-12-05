import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';


export const routes: Route[] = [
  {
    path: '',
    component: MainPageComponent

  }
];

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainTabModule {
}
