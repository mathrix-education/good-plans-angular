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
import {GoodPlanComponent} from './components/good-plan/good-plan.component';
import {FirstPageComponent} from './components/first-page/first-page.component';
import {RootComponent} from './components/root/root.component';
import {GoodPlanModalComponent} from './components/good-plan-modal/good-plan-modal.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {StarsComponent} from './components/stars/stars.component';
import {AuthenticationService} from './services/authentication.service';
import {FilterComponent} from './components/filter/filter.component';
import {AuthTokenName, BaseUrl, IridiumModule} from '@mathrix-education/iridium';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    VisionComponent,
    MainPageComponent,
    ProfilePageComponent,
    GoodPlanComponent,
    FirstPageComponent,
    RootComponent,
    GoodPlanModalComponent,
    LoginComponent,
    StarsComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ClarityModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    {provide: BaseUrl, useValue: 'https://dev.api.good-plans.mathrix.fr'},
    {provide: AuthTokenName, useValue: 'good-plan'}
  ],
  bootstrap: [RootComponent]
})
export class AppModule {
}
