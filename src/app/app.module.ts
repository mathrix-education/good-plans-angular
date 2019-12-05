import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VisionComponent} from './components/vision/vision.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MainPageComponent} from './components/main-page/main-page.component';
import {ProfilePageComponent} from './components/profile-page/profile-page.component';
import {routes} from './routes';




@NgModule({
  declarations: [
    AppComponent,
    VisionComponent,
    MainPageComponent,
    ProfilePageComponent
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
