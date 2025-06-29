import {Component, inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatCard, MatCardContent,} from "@angular/material/card";
import {MatError, MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  imports: [
    MatIcon,
    MatFormField,
    MatCardContent,
    MatLabel,
    FormsModule,
    MatInput,
    MatCard,
    ReactiveFormsModule,
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose,
    MatError,
  ],
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;
  private bookService = inject(BookService);

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<BookFormComponent>,
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.bookForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', []],
      price: [0, []],
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.snackBar.open('Книга успешно добавлена!', 'Close', {
        duration: 3000
      });
    } else {
      this.bookForm.markAllAsTouched();
    }

    this.bookService.saveBook(this.bookForm.value)
    this.dialogRef.close();
  }

  get validateControl(): { [key: string]: AbstractControl } {
    return this.bookForm.controls;
  }
}
