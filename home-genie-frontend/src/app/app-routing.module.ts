import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './home/hero/hero.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SuccessComponent } from './shared/success/success.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ChatHelpComponent } from './home/chat-help/chat-help.component';
import { AddToCartComponent } from './home/add-to-cart/add-to-cart.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { FetchUserComponent } from './auth/fetch-user/fetch-user.component';
import { BookingComponent } from './home/booking/booking.component';
import { BookingsListComponent } from './home/bookings-list/bookings-list.component';
// import { FetchUserComponent } from './auth/fetch-user/fetch-user.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HeroComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'chat',
    component: ChatHelpComponent,
  },
  {
    path: 'app-navbar',
    component: NavbarComponent,
  },
  {
    path: 'reset/:token',
    component: ResetPasswordComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
  {
    path: 'notfound',
    component: NotfoundComponent,
  },
  {
    path: 'add-to-cart',
    component: AddToCartComponent,
  },
  {
    path: 'category/:serviceId',
    component: CategoriesComponent,
  },
  {
    path:"fetch-user",
    component:FetchUserComponent
  },{
    path: "booking",
    component:BookingComponent
  },{
    path:"booking-list",
    component:BookingsListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
