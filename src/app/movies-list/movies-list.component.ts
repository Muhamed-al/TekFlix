import { Component } from '@angular/core';
import { Film, FILMS } from '../models/film';

@Component({
  selector: 'app-movies-list',
  standalone: false,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  categories: string[] = ['All', 'Action', 'Comedy', 'Adventure', 'Fantasy', 'Horror', 'Romance']
  selectedCategory: string = 'All';
  films: Film[] = FILMS;
  filterFilms? : Film[];


  get filteredFilms(): Film[] {
    return this.selectedCategory === 'All'
      ? this.films
      : this.films.filter(
        f => f.genre === this.selectedCategory
      );
  }
  selectCategory(category: string) {
    this.selectedCategory = category;
    console.log("Selected Category : " , this.selectedCategory)
  }



}
