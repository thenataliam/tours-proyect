import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { TourListComponent } from './components/tour-list/tour-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    TourListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
