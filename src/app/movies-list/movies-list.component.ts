import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../models/film';

@Component({
  selector: 'app-movies-list',
  standalone: false,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  categories: string[] = ['All', 'Action', 'Comedy', 'Adventure', 'Fantasy', 'Horror', 'Romance']
  selectedCategory: string = 'All';
  films: Film[] = [];
  filterFilms?: Film[];


  constructor(private filmService : FilmService){}

  ngOnInit(){
    debugger;
    this.films = this.filmService.getAllFilms();
  }
  selectCategory(cat: string) {
    this.selectedCategory = cat;
    console.log("Selected Category :", this.selectedCategory)
  }

  get filteredFilm(): Film[] {
    return this.selectedCategory === 'All'
      ? this.films
      : this.films.filter(  f =>  f.genre === this.selectedCategory );
  }
























  // get filteredFilm() : Film[]{
  //   return this.selectedCategory === 'All' 
  //   ? this.films 
  //   : this.films.filter(f=> f.genre === this.selectedCategory)
  // }


  // selectCategory(category: string) {
  //   this.selectedCategory = category;
  //   console.log("Selected Category : " , this.selectedCategory)
  // }



}
