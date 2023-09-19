import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { PrincipalCardVerticalComponent } from './components/principal-card-vertical/principal-card-vertical.component';
import { BigCardVerticalComponent } from './components/big-card-vertical/big-card-vertical.component';
import { MediumCardVerticalComponent } from './components/medium-card-vertical/medium-card-vertical.component';
import { SmallCardVerticalComponent } from './components/small-card-vertical/small-card-vertical.component';
import { SmallCardHorizontalComponent } from './components/small-card-horizontal/small-card-horizontal.component';
import { MediumCardHorizontalComponent } from './components/medium-card-horizontal/medium-card-horizontal.component';
import { OthersArticlesComponent } from './components/others-articles/others-articles.component';
import { OthersArticlesCardComponent } from './components/others-articles-card/others-articles-card.component';
import { DepositionsCardComponent } from './components/depositions-card/depositions-card.component';
import { HighlightSectionComponent } from './components/highlight-section/highlight-section.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    PrincipalCardVerticalComponent,
    BigCardVerticalComponent,
    MediumCardVerticalComponent,
    SmallCardVerticalComponent,
    SmallCardHorizontalComponent,
    MediumCardHorizontalComponent,
    OthersArticlesComponent,
    OthersArticlesCardComponent,
    DepositionsCardComponent,
    HighlightSectionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
