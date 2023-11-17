import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Movie {
  title: string;
  year: number;
  rating: number;
  urlPoster: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'assets/imdb-top-50.json'

  constructor( private httpClient: HttpClient) { }

  getMovies(){
    return this.httpClient.get<{data: {movies: Movie[]}}>(this.moviesUrl);
  }
}
