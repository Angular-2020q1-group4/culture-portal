import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from './angular-material.module';

import { TranslateModule } from '@ngx-translate/core';
import { DateTranslatePipe } from './pipe/date-translate.pipe';

@NgModule({
  declarations: [HeaderComponent, DateTranslatePipe],
  imports: [CommonModule, TranslateModule, RouterModule, AngularMaterialModule],
  exports: [
    CommonModule,
    TranslateModule,
    HeaderComponent,
    AngularMaterialModule,
    DateTranslatePipe
  ]
})
export class SharedModule {}
