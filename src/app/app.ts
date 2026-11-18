import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from './components/search-bar/search-bar';
import { HeadBar } from './components/head-bar/head-bar';
import { MovieList } from './components/movie-list/movie-list';
@Component({
  imports: [HeadBar, SearchBar, MovieList, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('movie-app');
}
