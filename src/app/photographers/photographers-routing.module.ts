import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotographersListPageComponent } from './pages/photographers-list-page/photographers-list-page.component';
import { PhotographerDetailPageComponent } from './pages/photographer-detail-page/photographer-detail-page.component';

const routes: Routes = [
  { path: '', component: PhotographersListPageComponent },
  { path: ':id', component: PhotographerDetailPageComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotographersRoutingModule {}
