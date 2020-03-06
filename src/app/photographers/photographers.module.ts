import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographersRoutingModule } from './photographers-routing.module';
import { PhotographersListPageComponent } from './pages/photographers-list-page/photographers-list-page.component';
import { PhotographerDetailPageComponent } from './pages/photographer-detail-page/photographer-detail-page.component';

@NgModule({
  declarations: [
    PhotographersListPageComponent,
    PhotographerDetailPageComponent
  ],
  imports: [CommonModule, PhotographersRoutingModule]
})
export class PhotographersModule {}
