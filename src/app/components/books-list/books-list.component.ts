import {Component, Signal} from '@angular/core';
import {BookService} from "../../services/book.service";
import {IBook} from "../../models/IBook";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {BookCardComponent} from "../book-card/book-card.component";
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [
    MatGridTile,
    MatGridList,
    BookCardComponent,
    MatIcon,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  books!: Signal<IBook[]>;

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  addBook() {
    this.bookService.openAddBookPopup();
  }
}
