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
import { CategoriesComponent } from './categories/categories.component';
import { BookingComponent } from './booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';


@NgModule({
  declarations: [
    HeroComponent,
    ChatHelpComponent,
    ProductsComponent,
    ServicesComponent,
    RatingsComponent,
    AddToCartComponent,
    CategoriesComponent,
    BookingComponent,
    PaymentComponent,
    BookingsListComponent
  ],
  imports: [
    CommonModule,HttpClientModule ,
    RouterModule,
    FormsModule,ReactiveFormsModule
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
