import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    ListMoviesComponent,
    AddMovieComponent,
    UpdateMovieComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
