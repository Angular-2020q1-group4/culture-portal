import { NgModule } from '@angular/core';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

const componentModules = [
  MatButtonToggleModule,
  MatButtonModule,
  MatCardModule,
  MatTabsModule
];

@NgModule({
  imports: componentModules,
  exports: componentModules
})
export class AngularMaterialModule {}
