import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieListItemComponent } from './pages/movie-list-item/movie-list-item.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar/sidebar.component';

import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieListItemComponent,
    NavbarComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
