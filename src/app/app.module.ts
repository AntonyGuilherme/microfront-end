import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LunaComponentsComponent } from './luna-components/luna-components.component';
import { LunaNotFoundedComponent } from './luna-not-founded/luna-not-founded.component';

@NgModule({
  declarations: [
    AppComponent,
    LunaComponentsComponent,
    LunaNotFoundedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
