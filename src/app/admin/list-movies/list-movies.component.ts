import { Component } from '@angular/core';
import { Film } from '../../models/film';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-list-movies',
  standalone: false,
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {
  searchTerm: string = '';
  selectedGenre: string = '';
  selectedYear: string = '';
  films: Film[] = [];
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.films = this.filmService.getAllFilms();
  }

  genres = [...new Set(this.films.map(f => f.genre))];
  years = [...new Set(this.films.map(f => f.year))];

  filteredFilms() {
    return this.films.filter(film =>
      (!this.searchTerm || film.title.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (!this.selectedGenre || film.genre === this.selectedGenre) &&
      (!this.selectedYear || film.year.toString() === this.selectedYear)
    );
  }

  addFilm() {
    console.log('Ajout d\'un film');
  }
}
