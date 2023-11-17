
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListItemComponent} from "./movie-list-item.component";

const routes: Routes = [
  {
    path: '',
    component: MovieListItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieListRoutingModule {}
