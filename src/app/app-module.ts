import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './home/home.component';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { MaterialModule } from './material/material-module';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    Projects,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
