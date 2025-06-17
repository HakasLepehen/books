import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {BooksListComponent} from "./components/books-list/books-list.component";
import {BookDetailsComponent} from "./components/book-details/book-details.component";

export const routes: Routes = [
  { path: '', component: BooksListComponent },
  { path: 'books/:id', component: BookDetailsComponent },
];
