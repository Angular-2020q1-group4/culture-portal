import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographersRoutingModule } from './photographers-routing.module';
import { PhotographerItemComponent } from './components/photographer-item/photographer-item.component';
import { PhotographersListPageComponent } from './pages/photographers-list-page/photographers-list-page.component';
import { PhotographerDetailPageComponent } from './pages/photographer-detail-page/photographer-detail-page.component';

import { MglTimelineModule } from 'angular-mgl-timeline.9';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    PhotographersListPageComponent,
    PhotographerDetailPageComponent,
    TimelineComponent,
    PhotographerItemComponent
  ],
  imports: [SharedModule, PhotographersRoutingModule, MglTimelineModule]
})
export class PhotographersModule {}
