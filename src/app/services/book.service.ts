import {Injectable, signal} from '@angular/core';
import {IBook} from "../models/IBook";
import booksData from '../../assets/books.json';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = signal<IBook[]>(booksData);

  getBooks() {
    return this.books.asReadonly();
  }

  getBookById(id: string) {
    return this.books().find(book => book.id === id);
  }
}
