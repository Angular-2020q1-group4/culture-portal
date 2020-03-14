import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { PhotographersRoutingModule } from './photographers-routing.module';
import { MglTimelineModule } from 'angular-mgl-timeline.9';

import { PhotographersListPageComponent } from './pages/photographers-list-page/photographers-list-page.component';
import { PhotographerDetailPageComponent } from './pages/photographer-detail-page/photographer-detail-page.component';
import { PhotographerItemComponent } from './components/photographer-item/photographer-item.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SearchComponent } from './components/search/search.component';
import { PhotographerCardComponent } from './components/photographer-card/photographer-card.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FbTransLoaderFactory } from '../firebase.module';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    TimelineComponent,
    PhotographersListPageComponent,
    PhotographerDetailPageComponent,
    PhotographerItemComponent,
    SearchComponent,
    PhotographerCardComponent
  ],
  imports: [
    SharedModule,
    PhotographersRoutingModule,
    MglTimelineModule,
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
