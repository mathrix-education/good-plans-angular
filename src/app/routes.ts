import {Route} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {ProfilePageComponent} from './components/profile-page/profile-page.component';
import {RegisterComponent} from '../register/components/register/register.component';
import {VisionComponent} from './components/vision/vision.component';

export const routes: Route[] = [{
  path: 'mes-bons-plans',
  component: MainPageComponent
},
  {
    path: 'profil',
    component: ProfilePageComponent
  },
  {
    path: 'inscription',
    component: RegisterComponent
  },
  {
    path: 'vision', component: VisionComponent
  },
  {path: '', redirectTo: 'mes-bons-plans', pathMatch: 'full'},
];
