import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularMaterialModule } from './angular-material.module';

import { TranslateModule } from '@ngx-translate/core';
import { DateTranslatePipe } from './pipes/date-translate.pipe';

@NgModule({
  declarations: [HeaderComponent, DateTranslatePipe, FooterComponent],
  imports: [CommonModule, TranslateModule, RouterModule, AngularMaterialModule],
  exports: [
    CommonModule,
    TranslateModule,
    HeaderComponent,
    AngularMaterialModule,
    DateTranslatePipe,
    FooterComponent
  ]
})
export class SharedModule {}
