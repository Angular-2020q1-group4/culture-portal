import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { WorklogPageComponent } from './pages/worklog-page/worklog-page.component';
import { StyleguidePageComponent } from './pages/styleguide-page/styleguide-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
  declarations: [
    TeamPageComponent,
    WorklogPageComponent,
    StyleguidePageComponent,
    AboutPageComponent
  ],
  imports: [CommonModule, AboutRoutingModule]
})
export class AboutModule {}
