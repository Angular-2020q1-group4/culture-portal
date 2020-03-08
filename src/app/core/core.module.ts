import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { SharedModule } from '../shared/shared.module';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [Error404PageComponent, MainPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [MainPageComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }]
})
export class CoreModule {}
