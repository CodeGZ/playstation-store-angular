import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { CardComponent } from './components/card/card.component';
import { ContentComponent } from './pages/content/content.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    CardLabelComponent,
    CardPricingComponent,
    CardComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
