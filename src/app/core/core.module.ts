import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { Error404PageComponent, MainPageComponent } from '@core/pages';
import { FooterComponent, HeaderComponent } from '@core/components';
import { LanguageMenuComponent } from '@core/components/language-menu/language-menu.component';

@NgModule({
  declarations: [
    Error404PageComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    LanguageMenuComponent
  ],
  imports: [SharedModule],
  exports: [MainPageComponent, HeaderComponent, FooterComponent]
})
export class CoreModule {}
