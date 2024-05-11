import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, DashboardComponent, ResetPasswordComponent, ForgotPasswordComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule , RouterModule,AppRoutingModule],
  exports: [RegisterComponent, LoginComponent,DashboardComponent, ResetPasswordComponent , ForgotPasswordComponent],
})
export class AuthModule {}
