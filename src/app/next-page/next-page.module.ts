import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NextPagePageRoutingModule } from './next-page-routing.module';

import { NextPagePage } from './next-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NextPagePageRoutingModule
  ],
  declarations: [NextPagePage]
})
export class NextPagePageModule {}
