import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BookBorrowingService } from './book-borrowing.service';

@Controller('register')
export class BookBorrowingController {

  constructor(private bookBorrowingService: BookBorrowingService) {
  }


  @Post('borrow')
  borrowBook(@Body() body) {
    const studentId = body['student'];
    const bookId = body['book'];
    return this.bookBorrowingService.borrowBook(studentId, bookId);
  }


  @Post('return')
  returnBook(@Body() body) {
    const studentId = body['student'];
    const bookId = body['book'];
    return this.bookBorrowingService.returnBook(studentId, bookId);
  }

  @Get('list')
  getList(@Query() query) {

    return this.bookBorrowingService.getListRecords(query['student'], query['book']);
  }

}