import {inject, Injectable, signal} from '@angular/core';
import {IBook} from "../models/IBook";
import booksData from '../../assets/books.json';
import {MatDialog} from "@angular/material/dialog";
import {BookFormComponent} from "../components/book-form/book-form.component";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = signal<IBook[]>(booksData);
  private dialog = inject(MatDialog);

  getBooks() {
    return this.books.asReadonly();
  }

  getBookById(queryParam: string) {
    const id: number = parseInt(queryParam);
    if (isNaN(id)) {
      throw new Error(`Для идентификатора ${queryParam} книга не найдена`);
    }
    return this.books().find(book => book.id === id);
  }

  openAddBookPopup(): void {
    this.dialog.open(BookFormComponent, {
      width: 'auto'
    });
  }

  saveBook(book: IBook) {
    book.id = this.books.length;
    this.books.update(books => [...books, book]);
  }
}
