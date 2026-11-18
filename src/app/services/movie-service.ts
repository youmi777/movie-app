import { Injectable ,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable, map,pipe,  } from 'rxjs';
import { MovieReponse } from '../interfaces/movie-reponse';
import { Movie } from '../interfaces/movie';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
    private readonly http=inject(HttpClient)
    private readonly url=environment.apiUrl
    private readonly Key=environment.apiKey
    private readonly movieUrl=environment.url_movie_api

    public movieList=signal<Movie[]>([]);
    public selectedMovie=signal<Movie | null>(null);
    public wishList=signal<Movie[]>([]);

    addToWishList(movie: Movie): void {
      this.wishList.update(wishList =>[...wishList, movie])
      localStorage.setItem('wishList', JSON.stringify(this.wishList()));
    }

    getMovieList(): Observable<Movie[]>{
    return this.http
    .get<MovieReponse>(`${this.url}?api_key=${this.Key}`)
    .pipe(
      map(response => response.results)
  );
    }

    getMovieByID(id:number){
      return this.http
        .get<Movie>(`${this.movieUrl}/${id}?api_key=${this.Key}`).pipe(map(response => response))

    }
}
