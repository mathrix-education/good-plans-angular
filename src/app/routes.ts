import {Route} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {ProfilePageComponent} from './components/profile-page/profile-page.component';
import {RegisterComponent} from '../register/components/register/register.component';
import {VisionComponent} from './components/vision/vision.component';
import {GoodPlanComponent} from './components/good-plan/good-plan.component';
import {AppComponent} from './components/app/app.component';
import {FirstPageComponent} from './components/first-page/first-page.component';
import {LoginComponent} from './components/login/login.component';
import {GoodPlanModalComponent} from './components/good-plan-modal/good-plan-modal.component';
import {LoginResolver} from '../resolvers/login.resolver';
import {TechnologiesComponent} from './components/technologies/technologies.component';

export const routes: Route[] = [

  {
    path: '', component: FirstPageComponent, resolve: {data: LoginResolver}
  },
  {
    path: 'inscription',
    component: RegisterComponent
  },
  {
    path: 'app',
    component: AppComponent, children: [
      {
        path: 'profil',
        component: ProfilePageComponent
      },
      {path: 'mes-bons-plans', component: MainPageComponent},
      {
        path: 'bon-plan/:id',
        component: GoodPlanComponent
      },
      {
        path: 'vision', component: VisionComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'modal',
        component: GoodPlanModalComponent
      },
      {
        path: 'technologies',
        component: TechnologiesComponent
      },
    ]
  },
  {path: '', redirectTo: 'app', pathMatch: 'full'}
];
