import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../models/film';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-update-movie',
  standalone: false,
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.css'
})
export class UpdateMovieComponent {

  filmId?: number;
  film? : Film;

  constructor(private activatedRoute: ActivatedRoute,
              private filmService: FilmService) { }

  ngOnInit() {
    this.filmId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') ?? '0');
    console.log("IF FILM : ", this.filmId)
    this.film = this.filmService.getFilmById(this.filmId);
    console.log("Film : " , this.film);
  }

}
