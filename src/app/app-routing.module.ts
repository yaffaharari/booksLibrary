import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookListManagerComponent } from './book-list-manager/book-list-manager.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment.prod';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';

const appRoute: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'bookList', component: BookListManagerComponent},
  {path: 'addBook', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute, {enableTracing: !environment.production})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
