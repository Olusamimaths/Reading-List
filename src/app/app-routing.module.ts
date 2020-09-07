import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'detail/:id', component: BookDetailComponent },
  { path: 'books/add', component: AddBookComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
