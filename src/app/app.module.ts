import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {Route, RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { VisionComponent } from './components/vision/vision.component';
import {FlexLayoutModule} from '@angular/flex-layout';


export const routes: Route[] = [{
  path: 'mes-bons-plans',
  loadChildren: () => import('./components/main-tab/main-tab.module').then(m => m.MainTabModule)
},
  {
    path: 'mon-profil',
    loadChildren: () => import('./components/profile-tab/profile-tab.module').then(m => m.ProfileTabModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./../register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'vision', component: VisionComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VisionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ClarityModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
