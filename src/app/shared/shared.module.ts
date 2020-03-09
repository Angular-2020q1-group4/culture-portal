import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  exports: [CommonModule, HeaderComponent, AngularMaterialModule]
})
export class SharedModule {}
