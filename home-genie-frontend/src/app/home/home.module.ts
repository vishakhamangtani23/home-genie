import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ChatHelpComponent } from './chat-help/chat-help.component';

import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    HeroComponent,
    ChatHelpComponent
  ],
  imports: [
    CommonModule,HttpClientModule 
  ],
  exports: [
    HeroComponent,
    ChatHelpComponent
  ]
})
export class HomeModule { }
