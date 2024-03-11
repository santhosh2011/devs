import { Body, Controller, Post } from '@nestjs/common';
import { BookBorrowingService } from './book-borrowing.service';

@Controller('borrow')
export class BookBorrowingController {

  constructor(private bookBorrowingService:BookBorrowingService) {
  }


  @Post('book')
  borrowBook(@Body() body) {
    const studentId = body['student'];
    const bookId = body['book'];
    this.bookBorrowingService.borrowBook(studentId,bookId);


  }
}