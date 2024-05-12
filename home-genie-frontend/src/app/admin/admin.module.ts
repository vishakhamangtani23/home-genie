import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AgChartsAngular } from 'ag-charts-angular';



@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule , RouterModule,AppRoutingModule,AgChartsAngular],
  exports: [AdminDashboardComponent],
})
export class AdminModule { }
