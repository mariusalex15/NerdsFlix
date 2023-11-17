import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieListRoutingModule} from "./movie-list-routing.module";
import {HttpClient} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MovieListRoutingModule
  ],
  providers: [HttpClient]
})
export class MovieListItemModule { }
