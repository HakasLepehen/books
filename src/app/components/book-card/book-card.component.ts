import {Component, inject, Input} from '@angular/core';
import {IBook} from "../../models/IBook";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {CurrencyPipe, DatePipe} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-card',
  imports: [
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardActions,
    MatCard,
    MatButton
  ],
  standalone: true,
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input({ required: true }) book!: IBook;
  private readonly router = inject(Router);

  openDetails(id: string) {
    this.router.navigate([`/books/${id}`])
  }
}
