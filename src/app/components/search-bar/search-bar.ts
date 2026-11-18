import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from '../../services/movie-service';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar {
  faMagnifyingGlass = faMagnifyingGlass;
  movieService = inject(MovieService);

  getMovieByTitle(title: string) {
    this.movieService.getMovieList().subscribe((response) => {
      this.movieService.movieList.set(
        response.filter((movie) =>
          movie.title.toLowerCase().includes(title.toLowerCase())
        )
      );
    });
  }
}
