import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})

export class BookServiceService {

  private readonly BOOKS: Book[];
  public selectedBook: Book;

  constructor() {
    this.BOOKS = [new Book(1, 'Suzanne Collins', new Date('4/5/1813'), 'the Hunger Games'),
      new Book(2, 'Jane Austen', new Date('4/5/1981'), 'Pride and Prejudice'),
      new Book(3, 'George; Orwell', new Date('4/5/1991'), 'Animal Farm')
    ];
  }

  getBooks(): Book[] {
    return this.BOOKS;
  }

  addBook() {
    let randomBook = this.BOOKS[Math.floor(Math.random() * this.BOOKS.length)];
    let newRandomBook = new Book(this.BOOKS.length + 1, randomBook.author, randomBook.date, randomBook.title);
    this.BOOKS.push(newRandomBook);
  }

  editBook(id: number): Book {
    let res = this.BOOKS.filter((book) => book.id === id);
    if (res) {
      this.selectedBook = res[0];
    }
    return this.selectedBook;
  }

  deleteBook(id: number) {
    let bookIndex = this.BOOKS.findIndex((crnBook) => crnBook.id === id);
    this.BOOKS.splice(bookIndex, 1);
  }

}
