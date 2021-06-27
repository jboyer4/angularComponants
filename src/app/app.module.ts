import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { charDisplay } from './charDisplay/charDisplay.componant';
import { charGen } from './charGen/charGen.component';

@NgModule({
  declarations: [
    AppComponent,
    charGen,
    charDisplay,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
