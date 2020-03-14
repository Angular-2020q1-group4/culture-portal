import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { PhotographersRoutingModule } from './photographers-routing.module';
import { MglTimelineModule } from 'angular-mgl-timeline.9';

import { TimelineComponent } from './components/timeline/timeline.component';
import { PhotographerItemComponent } from './components/photographer-item/photographer-item.component';
import { PhotographersListPageComponent } from './pages/photographers-list-page/photographers-list-page.component';
import { PhotographerDetailPageComponent } from './pages/photographer-detail-page/photographer-detail-page.component';
import { SearchComponent } from './components/search/search.component';
import { PhotographerCardComponent } from './components/photographer-card/photographer-card.component';

@NgModule({
  declarations: [
    TimelineComponent,
    PhotographersListPageComponent,
    PhotographerDetailPageComponent,
    PhotographerItemComponent,
    SearchComponent,
    PhotographerCardComponent
  ],
  imports: [SharedModule, PhotographersRoutingModule, MglTimelineModule]
})
export class PhotographersModule {}
