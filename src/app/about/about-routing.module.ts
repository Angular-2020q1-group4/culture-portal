import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AboutPageComponent,
  StyleguidePageComponent,
  TeamPageComponent,
  WorklogPageComponent
} from '@about/pages';

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
