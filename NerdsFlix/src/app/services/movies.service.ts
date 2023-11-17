import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

export interface Movie {
    title: string;
    year: number;
    rating: number;
    urlPoster: string;
    isLikedByUser?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private moviesUrl = 'assets/imdb-top-50.json';
    private moviesSubject = new BehaviorSubject<Movie[]>([]);
    movies$ = this.moviesSubject.asObservable();
    private allMovies: Movie[] = [];

    constructor(private httpClient: HttpClient) {
        this.loadMovies();
    }

    private loadMovies() {
        this.httpClient.get<{ data: { movies: Movie[] } }>(this.moviesUrl)
            .subscribe(response => {
                this.allMovies = response.data.movies;
                this.moviesSubject.next(response.data.movies);
            });
    }

    sortMovies(criteria: 'title-asc' | 'title-desc'): void {
        const movies = this.moviesSubject.getValue();
        if (criteria === 'title-asc') {
            movies.sort((a, b) => a.title.localeCompare(b.title));
        } else if (criteria === 'title-desc') {
            movies.sort((a, b) => b.title.localeCompare(a.title));
        }
        this.moviesSubject.next(movies);
    }
    sortMoviesByRating(): void {
        const movies = this.moviesSubject.getValue();
        movies.sort((a, b) => b.rating - a.rating);
        this.moviesSubject.next(movies);
    }
    searchMovies(query: string): void {
        let filteredMovies = this.allMovies;

        if (query) {
            filteredMovies = this.allMovies.filter(movie =>
                movie.title.toLowerCase().includes(query.toLowerCase())
            );
        }

        this.moviesSubject.next(filteredMovies);
    }

}
