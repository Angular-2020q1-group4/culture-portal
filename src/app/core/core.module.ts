import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './pages/header/header.component';

@NgModule({
  declarations: [Error404PageComponent, MainPageComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, MainPageComponent]
})
export class CoreModule {}
