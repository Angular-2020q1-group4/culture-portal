import { NgModule } from '@angular/core';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

const componentModules = [
  MatButtonToggleModule,
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatCheckboxModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatDialogModule
];

@NgModule({
  imports: componentModules,
  exports: componentModules
})
export class AngularMaterialModule {}
