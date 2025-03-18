import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film, FILMS } from '../models/film';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FilmService } from '../services/film.service';


@Component({
  selector: 'app-movie-details',
  standalone: false,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  filmId?: any;
  films?: Film[];
  film?: Film;
  safeTrailerUrl!: SafeResourceUrl;
  showModal = false;

  constructor(private route: ActivatedRoute, 
              private sanitizer: DomSanitizer,
              private filmService : FilmService) {}


  ngOnInit() {
    console.log("INSIDE ngOnInit");
    this.films = this.filmService.getAllFilms();
    this.filmId = this.route.snapshot.paramMap.get('id');
    console.log("FILM ID:", this.filmId);
    this.film = this.filmService.getFilmById(parseInt(this.filmId))
    console.log("Film:", this.film);
  }

  openModal() {
    if (this.film && this.film.trailerUrl) {
      const embedUrl = this.film.trailerUrl.replace("watch?v=", "embed/");
      this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      this.showModal = true;
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
