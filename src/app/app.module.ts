import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { VideoPipe } from './components/pipes/video.pipe';








@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VideoPipe,
    
    
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
