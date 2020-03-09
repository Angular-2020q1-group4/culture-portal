import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographersRoutingModule } from './photographers-routing.module';
import { PhotographersListPageComponent } from './pages/photographers-list-page/photographers-list-page.component';
import { PhotographerDetailPageComponent } from './pages/photographer-detail-page/photographer-detail-page.component';
import { PhotographerItemComponent } from './components/photographer-item/photographer-item.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MglTimelineModule } from 'angular-mgl-timeline.9';
import { TimelineComponent } from './components/timeline/timeline.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PhotographersListPageComponent,
    PhotographerDetailPageComponent,
    TimelineComponent,
    PhotographerItemComponent
  ],
  imports: [
    CommonModule,
    PhotographersRoutingModule,
    MglTimelineModule,
    MatCardModule,
    MatButtonModule,
    SharedModule
  ]
})
export class PhotographersModule {}
