import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule } from '@shared/angular-material.module';
import { DateTranslatePipe, SearchPipe } from '@shared/pipes';

@NgModule({
  declarations: [DateTranslatePipe, SearchPipe],
  imports: [CommonModule, TranslateModule, RouterModule, AngularMaterialModule],
  exports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    AngularMaterialModule,
    DateTranslatePipe,
    SearchPipe
  ]
})
export class SharedModule {}
