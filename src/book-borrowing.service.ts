import { Injectable } from '@nestjs/common';
import { BookRegister, IssueRecord, Student } from './entities/library';
import { StudentService } from './student.service';

@Injectable()
export class BookBorrowingService {

  bookRegister: BookRegister;

  constructor(private studentService: StudentService) {
    this.bookRegister = new BookRegister();
  }


  borrowBook(studentId: number, bookId: number) {

    const student: Student = this.studentService.getStudent(studentId);
    // const issueRecord = new IssueRecord(1, student);

    // this.bookRegister.records.push(issueRecord);

  }
}