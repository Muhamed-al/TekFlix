import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-movie',
  standalone: false,
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {
  film = {
    title: '',
    description: '',
    genre: '',
    year: '',
    rating: '',
    image: null,
    trailerUrl: ''
  };

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.film.image = file.name;
  }

  onSubmit() {
    console.log("Film ajouté :", this.film);
    Swal.fire({
      title: 'Succés',
      text: `Film Ajouter avec succes`,
      icon: 'success',
      timer : 2000
    });
  }
}
