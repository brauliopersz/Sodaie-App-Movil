import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepertoireDetailPageRoutingModule } from './repertoire-detail-routing.module';

import { RepertoireDetailPage } from './repertoire-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepertoireDetailPageRoutingModule
  ],
  declarations: [RepertoireDetailPage]
})
export class RepertoireDetailPageModule {}
