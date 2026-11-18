import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Movie } from '../../interfaces/movie';
import { Router } from '@angular/router';
@Component({
  imports: [],
  selector: 'app-movie-list',
  styleUrl: './movie-list.css',
  templateUrl: './movie-list.html',
})
export class MovieList implements OnInit{
  router = inject(Router)
  movieList:Movie[]=[];
  movieService = inject(MovieService);
  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(response=>
      {this.movieService.movieList.set(response);
      console.log(this.movieService.movieList())})
      
    }

    navigateTo(movie: Movie) {
      this.router.navigate(['/', movie.id]);

    }

}
