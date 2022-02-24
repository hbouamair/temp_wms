import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmplacementPageRoutingModule } from './emplacement-routing.module';

import { EmplacementPage } from './emplacement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmplacementPageRoutingModule
  ],
  declarations: [EmplacementPage]
})
export class EmplacementPageModule {}
