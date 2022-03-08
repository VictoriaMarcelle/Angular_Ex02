import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    InputDateComponent,
    InputPasswordComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
