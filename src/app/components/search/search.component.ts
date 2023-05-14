import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  from: any = "";
  fromLocation: any = [];
  origin: any;
  fromLocationTemplate: boolean = true;
  toLocationTemplate: boolean = false;
  constructor() { }
    ngOnInit(): void {
    }
  handleFromLocation() {
      if (this.from.length > 3) {
        fetch(`http://localhost:5000/city-and-airport-search/${this.from}`)
        .then(response => response.json())
        .then(data => this.fromLocation = data.data)
      }
    }
    handleOrigin(location: any) {
      this.origin = location;
      this.fromLocationTemplate = false;
      this.toLocationTemplate = true;
      this.fromLocation = [];
    }
    
    to: any = "";
destination: any;
toLocation: any = [];
departureDateTemplate: boolean = false
handleToLocation() {
    if (this.to.length > 3) {
      fetch(`http://localhost:5000/city-and-airport-search/${this.to}`)
      .then(response => response.json())
      .then(data => this.toLocation = data.data)
    }
  }
  handleDestination(location: any) {
    this.destination = location;
    this.toLocationTemplate = false;
    this.toLocation = []
    this.departureDateTemplate = true;
  }
  }