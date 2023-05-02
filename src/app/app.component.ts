import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-rick-y-morty';
  constructor() {}

  private url = "https://rickandmortyapi.com/api/character";
  personajes:any;

  ngOnInit(): void {
    fetch(this.url)
    .then(response => response.json())
    .then((data) => {
      this.personajes = data.results
    })    
  }
  
}
