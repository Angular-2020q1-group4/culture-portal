import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule } from '@shared/angular-material.module';
import { PhotographerItemComponent } from '@shared/components';
import { DateTranslatePipe, SearchPipe } from '@shared/pipes';

@NgModule({
  declarations: [PhotographerItemComponent, DateTranslatePipe, SearchPipe],
  imports: [CommonModule, TranslateModule, RouterModule, AngularMaterialModule],
  exports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    AngularMaterialModule,
    PhotographerItemComponent,
    DateTranslatePipe,
    SearchPipe
  ]
})
export class SharedModule {}
