import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, ButtonModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
