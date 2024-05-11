import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ChatHelpComponent } from './chat-help/chat-help.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { RatingsComponent } from './ratings/ratings.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeroComponent,
    ChatHelpComponent,
    ProductsComponent,
    ServicesComponent,
    RatingsComponent,
    AddToCartComponent
  ],
  imports: [
    CommonModule,HttpClientModule ,
    RouterModule
  ],
  exports: [
    HeroComponent,
    ChatHelpComponent,
    ProductsComponent,
    ServicesComponent,
    RatingsComponent

  ]
})
export class HomeModule { }
