export class Book {
  id: number;
  title: string;
  author: string;

  constructor(id: number, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

}

export class Student {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}


export class IssueRecord {
  serial: number;
  student: Student;
  book: Book;
  issuedDate: Date;
  returnedDate: Date;

  constructor(
    serial: number,
    student: Student,
    book: Book,
    issueDate: Date,
    returnedDate: Date,
  ) {
    this.serial = serial;
    this.student = student;
    this.book = book;
    this.issuedDate = issueDate;
    this.returnedDate = returnedDate;

  }

}

export class Fine {
  transactionId: string;
  amount: number;
  issueRecord: IssueRecord;
}


export class BookRegister {
  records: IssueRecord[];
}



