import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'create', component: AddMovieComponent },
  { path: 'update/:id', component: UpdateMovieComponent },
  { path: 'list', component: ListMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
