import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [Error404PageComponent, MainPageComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }]
})
export class CoreModule {}
