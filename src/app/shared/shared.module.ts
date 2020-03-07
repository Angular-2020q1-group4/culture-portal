import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatButtonToggleModule, MatTabsModule],
  exports: [HeaderComponent]
})
export class SharedModule {}
