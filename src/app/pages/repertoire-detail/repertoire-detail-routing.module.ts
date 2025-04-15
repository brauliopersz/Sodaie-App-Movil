import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepertoireDetailPage } from './repertoire-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RepertoireDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepertoireDetailPageRoutingModule {}
