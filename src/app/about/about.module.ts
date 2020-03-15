import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';

import { DifficultiesComponent } from '@about/components/difficulties/difficulties.component';
import { StyleguidePageComponent } from '@about/pages/styleguide-page/styleguide-page.component';
import { AboutPageComponent } from '@about/pages/about-page/about-page.component';
import { WorklogPageComponent } from '@about/pages/worklog-page/worklog-page.component';
import { TeamPageComponent } from '@about/pages/team-page/team-page.component';
import { EvaluationComponent } from '@about/components/evaluation/evaluation.component';
import { WorklogComponent } from '@about/components/worklog/worklog.component';
import { TeamMemberCardComponent } from '@about/components/team-member-card/team-member-card.component';

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
