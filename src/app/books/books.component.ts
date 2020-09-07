import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private bookService: BooksService) {}

  books = [];

  getBooks() {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }
  ngOnInit(): void {
    this.getBooks();
    console.log(this.books);
  }
}
