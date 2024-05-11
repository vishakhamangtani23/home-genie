import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './home/hero/hero.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
<<<<<<< HEAD
import { SuccessComponent } from './shared/success/success.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
=======
import { ChatHelpComponent } from './home/chat-help/chat-help.component';
>>>>>>> b4b715fc34e4b0b9f8ebf8601a7ac63b25f5429d

const routes: Routes = [
  {
    path:'',
    component:RegisterComponent
  },
  {
    path: 'home',
    component: HeroComponent
  },
 {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },{
    path:'chat',
    component:ChatHelpComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
