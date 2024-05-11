import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ChatHelpComponent } from './chat-help/chat-help.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component'


@NgModule({
  declarations: [
    HeroComponent,
    ChatHelpComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,HttpClientModule 
  ],
  exports: [
    HeroComponent,
    ChatHelpComponent,
    ProductsComponent
  ]
})
export class HomeModule { }
