import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [Error404PageComponent, MainPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [MainPageComponent]
})
export class CoreModule {}
