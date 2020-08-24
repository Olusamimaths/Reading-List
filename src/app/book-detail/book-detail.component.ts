import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  @Input() book: Book;

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe((book) => (this.book = book));
  }

  ngOnInit(): void {
    this.getBook();
  }
}
