import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';
import { TopBarModule } from './top-bar/top-bar.module';
import { HomepageModule } from './homepage/homepage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    TopBarModule,
    HomepageModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
