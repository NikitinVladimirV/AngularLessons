import { Injectable } from '@angular/core';
import { HomepageModule } from '../homepage/homepage.module';
import { CounterModule } from '../counter/counter.module';

@Injectable({
  // providedIn: 'root',
  // providedIn: 'any',
  providedIn: HomepageModule,
})
export class DataService {
  public count = 0;

  decrease() {
    this.count > 0 ? this.count-- : 0;
  }

  increase() {
    this.count++;
  }

  constructor() {}
}
