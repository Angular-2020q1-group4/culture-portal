import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotographersListPageComponent } from '@photographers/pages';
import { PhotographerDetailPageComponent } from '@photographers/pages';
import { PhotographerResolver } from '@photographers/services';

const routes: Routes = [
  { path: '', component: PhotographersListPageComponent },
  {
    path: ':id',
    component: PhotographerDetailPageComponent,
    resolve: {
      author: PhotographerResolver
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotographersRoutingModule {}
