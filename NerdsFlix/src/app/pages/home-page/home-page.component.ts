import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  user = {
    name: 'Nerds',
    avatar: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg',

  };

  constructor(private router: Router) {}

  goToMovies(): void {
    this.router.navigate(['/movie-list-item']);
  }

}
