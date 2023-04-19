import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, CartModule],
  exports: [TopBarComponent],
})
export class TopBarModule {}
