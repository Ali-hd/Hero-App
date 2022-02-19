import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';
import { HomeComponent } from './components/home/home.component';
import { RatingComponent } from './components/rating/rating.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile/:id', component: HeroProfileComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    HerosComponent,
    HeroProfileComponent,
    HomeComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
