import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';

// @ts-ignore
@Component({
  selector: 'app-book-edit',
  template: `
    <div *ngIf="isEditMode">
      <div class="edit-book">
         <span>Title</span> <input [(ngModel)]="book.title">
         <span>Author</span> <input [(ngModel)]="book.author">
         <span>Date</span> <input type="date" [(ngModel)]="book.date">
      </div>
     <button (click)="saveBookBtn(book)" class="edit-book-btn">save</button>
     <button (click)="cancelEditBookBtn()" class="edit-book-btn">cancel</button>
    </div>
  `,
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  @Input() book: Book;
  @Output() saveBook: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() isEditMode: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  saveBookBtn(book: Book) {
    if (book.title.length == 0 || book.author.length == 0 || book.date.toLocaleDateString().length == 0) {
      alert('error, please enter a valid value in title and author and date fields');
    } else {
      this.saveBook.emit(book);
    }
  }

  cancelEditBookBtn() {
    this.isEditMode.emit();
  }
}


