import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { StyleguidePageComponent } from './pages/styleguide-page/styleguide-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { WorklogPageComponent } from './pages/worklog-page/worklog-page.component';

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
    children: [
      { path: '', component: TeamPageComponent },
      { path: 'worklog', component: WorklogPageComponent },
      { path: 'styleguide', component: StyleguidePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
