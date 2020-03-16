import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PhotographersModule } from '@photographers/photographers.module';


@NgModule({
  declarations: [Error404PageComponent, MainPageComponent],
  imports: [SharedModule, PhotographersModule],
  exports: [MainPageComponent]
})
export class CoreModule {}
