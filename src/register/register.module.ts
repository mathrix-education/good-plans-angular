import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './components/register/register.component';
import {Route, RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';

const routes: Route[] = [{
  path: '',
  component: RegisterComponent
}];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ClarityModule
  ]
})
export class RegisterModule {
}
