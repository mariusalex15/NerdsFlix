import {ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';
import {MovieService} from "../../../services/movies.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(
    private movieService: MovieService,
    private changeDetector: ChangeDetectorRef
  ) {}

  onSortChange(sortOrder: string) {
    this.movieService.sortMovies(sortOrder as 'title-asc' | 'title-desc');
    this.changeDetector.detectChanges();
  }
  sortMoviesByRating() {
    this.movieService.sortMoviesByRating();
  }
  onSearchChange(query: string) {
    this.movieService.searchMovies(query);
  }

}
