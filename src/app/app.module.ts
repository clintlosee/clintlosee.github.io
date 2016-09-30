import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent, FooterComponent, NavigationComponent, NavigationItemComponent, SpinnerComponent } from './shared/index';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavigationComponent,
    NavigationItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [Http],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
