import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmplacementPage } from './emplacement.page';

const routes: Routes = [
  {
    path: '',
    component: EmplacementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmplacementPageRoutingModule {}
