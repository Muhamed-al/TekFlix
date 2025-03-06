import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film, FILMS } from '../models/film';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-movie-details',
  standalone: false,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  filmId?: any;
  films: Film[] = FILMS;
  film?: Film;
  safeTrailerUrl!: SafeResourceUrl;
  showModal = false;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    console.log("INSIDE ngOnInit");
    this.filmId = this.route.snapshot.paramMap.get('id');
    console.log("FILM ID:", this.filmId);
    this.film = this.films.find(f => f.id === parseInt(this.filmId));
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
