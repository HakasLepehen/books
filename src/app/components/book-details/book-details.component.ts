import {Component, inject} from '@angular/core';
import {BookService} from "../../services/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatChip} from "@angular/material/chips";
import {IBook} from "../../models/IBook";
import {CurrencyPipe, DatePipe, NgIf} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-book-details',
  imports: [
    MatCard,
    MatIcon,
    MatIconButton,
    MatDivider,
    DatePipe,
    CurrencyPipe
  ],
  standalone: true,
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  private readonly bookService = inject(BookService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  book: IBook | undefined;

  ngOnInit(): void {
    this.book = this.bookService.getBookById(
      this.route.snapshot.paramMap.get('id')!
    );
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
