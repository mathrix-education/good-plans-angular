import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {ProfilePageComponent} from './components/profile-page/profile-page.component';


const routes: Route[] = [{
  path: '',
  component: ProfilePageComponent
}];


@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileTabModule {
}
