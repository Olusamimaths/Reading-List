import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  private readonly _books = new BehaviorSubject<Book[]>(BOOKS);

  readonly books$ = this._books.asObservable();

  get books(): Book[] {
    console.log('Get BOOKS');
    return this._books.getValue();
  }

  set books(val: Book[]) {
    console.log('Set book');
    this._books.next(val);
  }

  getBook(id: number): Observable<Book> {
    console.log('Get BOOK', id);
    return of(this._books.getValue().find((book) => book.id === id));
  }

  addBook(book: Book) {
    console.log('add book', book);
    const _books = this._books.getValue();
    const books = [..._books, { id: _books.length + 1, ...book }];
    this.books = books;
  }
}
