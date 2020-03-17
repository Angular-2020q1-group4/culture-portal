import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PhotographerResolver } from '@photographers/services/photographer.resolver';
import { Error404PageComponent } from '@core/pages/error404-page/error404-page.component';
import { MainPageComponent } from '@core/pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    component: MainPageComponent,
    resolve: {
      authorOfTheDay: PhotographerResolver
    },
    data: { state: 'main' }
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { state: 'about' }
  },
  {
    path: 'photographers',
    loadChildren: () =>
      import('./photographers/photographers.module').then(
        m => m.PhotographersModule
      ),
    data: { state: 'photographers' }
  },
  {
    path: 'not-found',
    component: Error404PageComponent,
    data: { state: 'not-found' }
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
