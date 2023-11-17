import {Component, OnInit} from '@angular/core';
import {LikeService} from "../../services/likes.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit {
  totalLikes: number = 0;

  constructor(private likeService: LikeService) {}

  ngOnInit() {
    this.likeService.likesCount$.subscribe(count => {
      this.totalLikes = count;
    });
  }

}
