import { Component, OnInit } from '@angular/core';
import { BookServiceService } from './services/book-service.service';

@Component({
  selector: 'app-root',
  template:
      `<h1 class="title">Welcome to {{title | titlecase}}</h1>
  <nav>
    <ul>
      <li><a routerLink="/home">Home</a></li>
      <li><a routerLink="/bookList">Book Library</a></li>
      <li><a routerLink="/addBook">Add Book</a></li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my book library';

  constructor() {
  }
}
