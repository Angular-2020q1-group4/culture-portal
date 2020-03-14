import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { PhotographersRoutingModule } from './photographers-routing.module';
import { MglTimelineModule } from 'angular-mgl-timeline.9';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { PhotographersListPageComponent } from './pages/photographers-list-page/photographers-list-page.component';
import { PhotographerDetailPageComponent } from './pages/photographer-detail-page/photographer-detail-page.component';
import { PhotographerItemComponent } from './components/photographer-item/photographer-item.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SearchComponent } from './components/search/search.component';
import { PhotographerCardComponent } from './components/photographer-card/photographer-card.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FbTransLoaderFactory } from '../firebase.module';
import { AngularFireDatabase } from 'angularfire2/database';
import { MapComponent } from './components/map/map.component';
import { WorklistComponent } from './components/worklist/worklist.component';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    TimelineComponent,
    PhotographersListPageComponent,
    PhotographerDetailPageComponent,
    PhotographerItemComponent,
    SearchComponent,
    PhotographerCardComponent,
    MapComponent,
    WorklistComponent,
    VideoplayerComponent
  ],
  imports: [
    SharedModule,
    PhotographersRoutingModule,
    MglTimelineModule,
    YouTubePlayerModule,
    AngularYandexMapsModule.forRoot(environment.ymapsApiKey),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: FbTransLoaderFactory,
        deps: [AngularFireDatabase]
      }
    })
  ]
})
export class PhotographersModule {}
