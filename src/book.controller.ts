import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { BookService } from './book.service';

@Controller('book')
export class BookController {

  constructor(private bookService: BookService) {

  }

  @Post('add')
  addBook(@Body() body) {
    const title = body['title'];
    const author = body['author'];
    return this.bookService.addBook(title,author);
  }
  @Get('list')
  listBooks() {
    return this.bookService.getBooks();
  }
}