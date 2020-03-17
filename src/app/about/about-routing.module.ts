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
      { path: '', component: TeamPageComponent, data: { state: '' } },
      {
        path: 'worklog',
        component: WorklogPageComponent,
        data: { state: 'worklog' }
      },
      {
        path: 'styleguide',
        component: StyleguidePageComponent,
        data: { state: 'styleguide' }
      }
    ],
    data: { state: '' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
