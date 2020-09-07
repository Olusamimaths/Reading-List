import { Component, OnInit, Input} from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  constructor(public bookService: BooksService) {}

  @Input() book: Book;



  ngOnInit(): void {
  }
}
