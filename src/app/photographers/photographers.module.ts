import { NgModule } from '@angular/core';

import { MglTimelineModule } from 'angular-mgl-timeline.9';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgImageSliderModule } from 'ng-image-slider';

import { environment } from 'src/environments/environment';
import { PhotographersRoutingModule } from './photographers-routing.module';
import { SharedModule } from '@shared/shared.module';

import { PhotographersListPageComponent } from '@photographers/pages';
import { PhotographerDetailPageComponent } from '@photographers/pages';
import { TimelineComponent } from '@photographers/components';
import { SearchComponent } from '@photographers/components';
import { PhotographerCardComponent } from '@photographers/components';
import { MapComponent } from '@photographers/components';
import { WorklistComponent } from '@photographers/components';
import { VideoplayerComponent } from '@photographers/components';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    TimelineComponent,
    PhotographersListPageComponent,
    PhotographerDetailPageComponent,
    SearchComponent,
    PhotographerCardComponent,
    MapComponent,
    WorklistComponent,
    VideoplayerComponent,
    ModalComponent
  ],
  imports: [
    SharedModule,
    PhotographersRoutingModule,
    MglTimelineModule,
    YouTubePlayerModule,
    NgImageSliderModule,
    AngularYandexMapsModule.forRoot(environment.ymapsApiKey)
  ]
})
export class PhotographersModule {}
