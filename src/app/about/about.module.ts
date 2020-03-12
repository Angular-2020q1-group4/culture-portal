import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { StyleguidePageComponent } from './pages/styleguide-page/styleguide-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { WorklogPageComponent } from './pages/worklog-page/worklog-page.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { WorklogComponent } from './components/worklog/worklog.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    StyleguidePageComponent,
    TeamPageComponent,
    WorklogPageComponent,
    EvaluationComponent,
    WorklogComponent
  ],
  imports: [AboutRoutingModule, SharedModule]
})
export class AboutModule {}
