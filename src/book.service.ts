import { Injectable } from '@nestjs/common';
import { Book, Student } from './entities/library';

@Injectable()
export class BookService {
  books: Book[];

  currentid: number = 0;

  constructor() {
    this.books = [];
  }

  addBook(title: string, author: string): Book {
    this.currentid = this.currentid + 1;
    const book = new Book(this.currentid, title, author);
    this.books.push(book);
    return book;
  }

  getBooks(): Book[] {
    return this.books;
  }
}