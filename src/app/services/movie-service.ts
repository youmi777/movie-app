import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { map, Observable } from "rxjs";
import { Movie } from "../interfaces/movie";
import { environment } from "../../environments/environment.development";
import { MovieReponse } from "../interfaces/movie-reponse";

@Injectable({
  providedIn:'root'
})
export class MovieService {


  private readonly http=inject(HttpClient) 
  private readonly url =environment.apiUrl
  private readonly key =environment.apiKey
  private readonly movieUrl=environment.url_movie_api



  public movieList = signal<Movie[]>([]);
  public selectedMovie=signal<Movie|null>(null)
  public wishList=signal<Movie[]>([]);

    getMovieList():Observable<Movie[]> {
    return this.http
    .get<MovieReponse>(`${this.url}?api_key=${this.key}`).pipe(
       map(response=>response.results)
      //shareReplay({bufferSize:1, refCount:false})) 
    )
  }
  getMovieById(id: number) {
    return this.http.get<Movie>(`${this.movieUrl}/${id}?api_key=${this.key}`).pipe(
      map(response=>response)
    )
  }
  addToWishList(movie: Movie): void {
    if (this.wishList().length === 0) {
      const savedMovies =
        localStorage.getItem('WishList') ?? localStorage.getItem('wishList');
      if (savedMovies) {
        this.wishList.set(JSON.parse(savedMovies) as Movie[]);
      }
    }

    this.wishList.update(wishList => [...wishList, movie]);
    localStorage.setItem('WishList', JSON.stringify(this.wishList()));
  }
}
