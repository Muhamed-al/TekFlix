import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Film, FILMS } from '../models/film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  films: Film[] = [];
  constructor(private router: Router , private filmService : FilmService) { }


  ngOnInit(){
      this.films = this.filmService.getAllFilms();
  }

  goToMoviesList() {
    this.router.navigate(['/movies-list']);
  }
}
