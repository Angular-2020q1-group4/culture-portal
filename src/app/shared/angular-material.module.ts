import { NgModule } from '@angular/core';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [MatButtonToggleModule, MatTabsModule],
  exports: [MatButtonToggleModule, MatTabsModule]
})
export class AngularMaterialModule {}
