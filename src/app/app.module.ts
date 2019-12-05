import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Route, RouterModule} from '@angular/router';


export const routes: Route[] = [{
  path: 'mes-bons-plans',
  loadChildren: () => import('./../main-tab/main-tab.module').then(m => m.MainTabModule)
},
  {
    path: 'mon-profil',
    loadChildren: () => import('./../profile-tab/profile-tab.module').then(m => m.ProfileTabModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
