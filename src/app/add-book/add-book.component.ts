import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BooksService } from '../books.service';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  constructor(private bookService: BooksService) {}

  addBookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    stars: new FormControl(''),
    summary: new FormControl(''),
    notes: new FormControl(''),
    coverImage: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    const { value } = this.addBookForm;
    this.bookService.addBook(value);
  }
}
