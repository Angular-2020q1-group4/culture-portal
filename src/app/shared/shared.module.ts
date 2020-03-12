import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from './angular-material.module';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, TranslateModule, RouterModule, AngularMaterialModule],
  exports: [
    CommonModule,
    TranslateModule,
    HeaderComponent,
    AngularMaterialModule
  ]
})
export class SharedModule {}
