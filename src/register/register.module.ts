import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './components/register/register.component';
import {Route, RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {FormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';

const routes: Route[] = [{
  path: '',
  component: RegisterComponent
}];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FlexModule,
    RouterModule.forChild(routes),
    ClarityModule,
    FormsModule,
  ]
})
export class RegisterModule {
}
