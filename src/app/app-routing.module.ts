import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookListManagerComponent } from './book-list-manager/book-list-manager.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment.prod';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';


const appRoute: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'bookList', component: BookListManagerComponent},
  {path: 'addBook', component: AppComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute, {enableTracing: !environment.production})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
