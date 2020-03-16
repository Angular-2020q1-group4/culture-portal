import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import {
  DifficultiesComponent,
  EvaluationComponent,
  TeamMemberCardComponent,
  WorklogComponent
} from '@about/components';
import {
  AboutPageComponent,
  StyleguidePageComponent,
  TeamPageComponent,
  WorklogPageComponent
} from '@about/pages';

@NgModule({
  declarations: [
    AboutPageComponent,
    StyleguidePageComponent,
    TeamPageComponent,
    WorklogPageComponent,
    EvaluationComponent,
    WorklogComponent,
    DifficultiesComponent,
    TeamMemberCardComponent
  ],
  imports: [AboutRoutingModule, SharedModule]
})
export class AboutModule {}
