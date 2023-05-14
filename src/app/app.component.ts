import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  X = [1,2];
  handleSearch(value: string){
    console.log(value)
  }
}
