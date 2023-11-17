import {Component, OnDestroy, OnInit} from '@angular/core';
import {Movie, MovieService} from "../../services/movies.service";
import {Subscription} from "rxjs";
import {LikeService} from "../../services/likes.service";

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrl: './movie-list-item.component.css'
})
export class MovieListItemComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  private moviesSubscription: Subscription| undefined;
  hoverStates = new Map<string, boolean>();

  constructor(private movieService: MovieService, private likeService: LikeService) {}

  ngOnInit() {
    //subscribe
    this.moviesSubscription = this.movieService.movies$.subscribe(movies => {
      this.movies = movies;
    });

  }

  ngOnDestroy() {
    //unsubscribe
    if (this.moviesSubscription) {
      this.moviesSubscription.unsubscribe();
    }
  }
  toggleLike(movie: Movie) {
    movie.isLikedByUser = !movie.isLikedByUser;
    if (movie.isLikedByUser) {
      this.likeService.incrementLikes();
    } else {
      this.likeService.decrementLikes();
    }
  }

  toggleHoverState(movieTitle: string, isHovered: boolean) {
    this.hoverStates.set(movieTitle, isHovered);
  }

  isHovered(movieTitle: string): boolean {
    return this.hoverStates.get(movieTitle) || false;
  }

}
