import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-rick-y-morty';
  constructor() {}

  private url = 'https://rickandmortyapi.com/api/character';
  personajes: any ;
  page: number = 1;

  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.personajes = data.results;
        this.url = data.info.next;
        console.log(this.url);
      })
      .catch(error => {
        console.log(error)
      })
  }

  cargarMas(){
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.personajes = [...this.personajes, ...data.results];
        this.url = data.info.next;
        console.log(this.url);
      })
      .catch(error => {
        console.log(error)
      })
  }
}
