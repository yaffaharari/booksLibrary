import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Book} from '../model/book';

@Component({
  selector: 'app-book-details',
  template: `<p>
                <b>{{currentBook.title | titlecase}} <br></b>    
                Author : {{currentBook.author}}<br>
                Date : {{currentBook.date | date }}<br>
             </p>
             <button (click)="editBookBtn(currentBook.id)" class="book-details-btn">edit</button>
             <button (click)="deleteBookBtn(currentBook.id)" class="book-details-btn">delete</button>
                `,
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() currentBook: Book;
  @Output() editCurrentBook: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteCurrentBook: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  editBookBtn(id: number) {
    this.editCurrentBook.emit(id);
  }

  deleteBookBtn(id: number) {
    this.deleteCurrentBook.emit(id);
  }
}
