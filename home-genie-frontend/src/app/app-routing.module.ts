import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './home/hero/hero.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChatHelpComponent } from './home/chat-help/chat-help.component';

const routes: Routes = [
  {
    path: 'hero',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
