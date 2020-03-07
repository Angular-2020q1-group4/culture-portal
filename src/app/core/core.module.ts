import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [Error404PageComponent, MainPageComponent],
  imports: [CommonModule],
  exports: [MainPageComponent]
})
export class CoreModule {}
