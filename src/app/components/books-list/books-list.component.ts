import {Component, signal, Signal} from '@angular/core';
import {BookService} from "../../services/book.service";
import {IBook} from "../../models/IBook";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {BookCardComponent} from "../book-card/book-card.component";
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [
    FormsModule,
    MatGridTile,
    MatGridList,
    BookCardComponent,
    MatIcon,
    MatButtonModule,
    MatIconModule,
    MatFormField,
    MatLabel,
    MatInput,
  ],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  searchQuery = '';
  filteredBooks = signal<IBook[]>([]);
  books!: Signal<IBook[]>;

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  addBook() {
    this.bookService.openAddBookPopup();
  }

  onSearch() {
    if (!this.searchQuery) {
      this.filteredBooks.set(this.books());
      return;
    }
    const query = this.searchQuery.toLowerCase();
    this.filteredBooks.set(
      this.books().filter(book =>
        book.title.toLowerCase().includes(query)
      )
    );
  }

  clearSearch() {
    this.searchQuery = '';
    this.filteredBooks.set(this.books());
  }
}
