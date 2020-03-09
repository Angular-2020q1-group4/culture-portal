import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { StyleguidePageComponent } from './pages/styleguide-page/styleguide-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { WorklogPageComponent } from './pages/worklog-page/worklog-page.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    StyleguidePageComponent,
    TeamPageComponent,
    WorklogPageComponent
  ],
  imports: [AboutRoutingModule, SharedModule]
})
export class AboutModule {}
