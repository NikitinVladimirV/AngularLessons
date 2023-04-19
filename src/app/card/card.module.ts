import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ButtonIconModule } from '../button/button-icon/button-icon.module';
import { ButtonModule } from '../button/button.module';
import { BageComponent } from './bage/bage.component';
import { DeliveryOptionsComponent } from './delivery-options/delivery-options.component';
import { RatesComponent } from './rates/rates.component';
import { PriceComponent } from './price/price.component';
import { ColorOptionComponent } from './color-option/color-option.component';

@NgModule({
  declarations: [
    CardComponent,
    BageComponent,
    DeliveryOptionsComponent,
    RatesComponent,
    PriceComponent,
    ColorOptionComponent,
  ],
  imports: [CommonModule, ButtonIconModule, ButtonModule],
  exports: [CardComponent],
})
export class CardModule {}
