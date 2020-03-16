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
    }
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'photographers',
    loadChildren: () =>
      import('./photographers/photographers.module').then(
        m => m.PhotographersModule
      )
  },
  { path: 'not-found', component: Error404PageComponent },
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
