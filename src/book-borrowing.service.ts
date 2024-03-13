import { Injectable } from '@nestjs/common';
import { Book, BookRegister, IssueRecord, Student } from './entities/library';
import { StudentService } from './student.service';
import { BookService } from './book.service';

@Injectable()
export class BookBorrowingService {

  bookRegister: BookRegister;
  currentid: number = 0;

  constructor(private studentService: StudentService, private bookService: BookService) {
    this.bookRegister = new BookRegister();
  }


  borrowBook(studentId: number, bookId: number) {
    this.currentid = this.currentid + 1;
    const student: Student = this.studentService.getStudent(studentId);
    const book: Book = this.bookService.getBook(bookId);
    if (book == null || student == null) {
      return `This book or student does not exist`;
    }
    // condition to check weather the book is available or not;
    const records = this.bookRegister.records;
    for (let i = 0; i < records.length; i++) {
      if (records[i].book == book && records[i].returnedDate == null) {
        return `This book is already issued - ${records[i].student.name}`;
      }
    }


    const issueRecord = new IssueRecord(
      this.currentid,
      student,
      book,
      new Date(),
      null,
    );
    this.bookRegister.records.push(issueRecord);
    return this.bookRegister;
  }


  returnBook(studentId: number, bookId: number) {
    let found = false;
    for (let i = 0; i < this.bookRegister.records.length; i++) {
      const record = this.bookRegister.records[i];
      if (record.student.id == studentId && record.book.id == bookId && record.returnedDate == null) {
        found = true;
        record.returnedDate = new Date();
      }
    }

    if (found == true) {
      return this.bookRegister;
    } else {
      return 'This student never took this book';
    }
  }

  getListRecords(studentId: number, bookId: number) {

    /*
    loop through all the records and check if the student id of the record matches the passed studentid
    then we will append that record in to the defined array.
     */
    const result = [];
    for (let i = 0; i < this.bookRegister.records.length; i++) {
      if (
        (studentId ==null || this.bookRegister.records[i].student.id == studentId)
        &&(bookId==null|| this.bookRegister.records[i].book.id==bookId)
      ) {
        result.push(this.bookRegister.records[i]);
      }
    }
    return result;

  }
}