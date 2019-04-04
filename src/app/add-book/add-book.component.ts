import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';
import { log } from 'util';
import { BookServiceService } from '../services/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  template: `
    <div class="edit-book">
      <span>Title</span> <input #titleInput type="text">
      <span>Author</span> <input #authorInput type="text">
      <span>Date</span> <input #dateInput type="date">
      <button (click)="addBookBtn(titleInput.value,authorInput.value, dateInput.value)"
              class="edit-book-btn">add
      </button>
    </div>
  `,
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  @Input() book: Book;

  constructor(private router: Router, private bookService: BookServiceService) {
  }

  ngOnInit() {
  }

  addBookBtn(title: string, author: string, date: string) {
    if (title.length == 0 || author.length == 0 || date.length == 0) {
      alert('error, please enter a valid value in title and author and date fields');
    } else {
      this.book = new Book(this.bookService.getBooks().length + 2, title, new Date(), title); // +1 for the follow next number. and then again +1 because the array length begin from 0 index. = this.bookService.getBooks().length + 2
      this.bookService.addBook(this.book);
      this.router.navigate(['/bookList']);
    }
  }

}
