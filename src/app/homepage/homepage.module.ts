import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterModule } from '../counter/counter.module';
import { HomepageComponent } from './homepage.component';
import { DataService } from '../services/data.service';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, CounterModule],
  exports: [HomepageComponent],
  // providers: [DataService],
})
export class HomepageModule {}
