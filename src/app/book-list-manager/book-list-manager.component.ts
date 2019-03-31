import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-list-manager',
  template:`
    <div *ngFor="let book of books" class="book-library">
      <app-book-details [currentBook]="book" (editCurrentBook)="editBookEmit($event)" (deleteCurrentBook)="deleteBookEmit($event)"
                        class="book"></app-book-details>
    </div>
    <app-book-edit *ngIf="editMode" [book]="selectedBook" (saveBook)="saveBookEmit($event)" (isEditMode)="editModeFunc($event)"></app-book-edit>
  `,
  styleUrls: ['./book-list-manager.component.css']
})
export class BookListManagerComponent implements OnInit {

  public books: Book[];
  public editMode = false;
  public selectedBook: Book;

  constructor(private bookService : BookServiceService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  editBookEmit(id: number) {
    this.editMode = !this.editMode;
    this.selectedBook = this.bookService.editBook(id);
  }

  deleteBookEmit(id: number) {
    this.editMode = false;
    this.bookService.deleteBook(id);
  }

  /*  getBookById(id: number) {
        for ( const i of this.books) {
          if (this.books[i].id === id) {
            return this.books[i];
          }
        }
    }*/
  saveBookEmit(book: Book) {
    //let bookIndex = this.books.findIndex((crnBook) => crnBook.id === book.id);
    let bookIndex = this.books.indexOf(book);
    this.books[bookIndex] = book;
    this.editMode = !this.editMode;
  }

  editModeFunc() {
    this.editMode = !this.editMode;
  }
}
