import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  constructor(private bookService: BooksService) {}

  books: Book[];

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
