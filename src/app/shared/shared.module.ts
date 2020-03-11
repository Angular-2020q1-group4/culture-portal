import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { DateTranslatePipe } from './pipe/date-translate.pipe';

@NgModule({
  declarations: [HeaderComponent, DateTranslatePipe],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonToggleModule,
    MatTabsModule,
    TranslateModule
  ],
  exports: [HeaderComponent, TranslateModule, DateTranslatePipe]
})
export class SharedModule {}
