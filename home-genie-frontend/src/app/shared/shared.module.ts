import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SuccessComponent } from './success/success.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SuccessComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    SuccessComponent
  ]
})
export class SharedModule { }
