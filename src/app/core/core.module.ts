import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { Error404PageComponent, MainPageComponent } from '@core/pages';
import { PhotographersModule } from '@photographers/photographers.module';
import { FooterComponent, HeaderComponent } from '@core/components';

@NgModule({
  declarations: [
    Error404PageComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [SharedModule, PhotographersModule],
  exports: [MainPageComponent, HeaderComponent, FooterComponent]
})
export class CoreModule {}
