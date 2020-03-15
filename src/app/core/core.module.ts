import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [Error404PageComponent, MainPageComponent],
  imports: [SharedModule],
  exports: [MainPageComponent]
})
export class CoreModule {}
