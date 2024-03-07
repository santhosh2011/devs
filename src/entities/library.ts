class Book {
  genre: string;
  author: Author;
  title: string;
  language: string;

  constructor(title:string) {
    this.title = title;
  }
}

class Author {
  name: string;
}

class Reservation {
  book: Book;
  reserved_date: Date;
  returned_date: Date;
}

class Student {
  name: string;
  id: string;
  active_books: Book[];
  returned_books: Book[];

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
    this.active_books = [];
    this.returned_books = [];
  }

  reserveBook(book: Book): void {
    this.active_books.push(book);
    // this.reserved_date.push(new Date());
  }

  returnBook(book: Book): void {
    const index = this.active_books.indexOf(book);
    if (index > 0) {
      this.active_books.splice(index, 1);
      this.returned_books.push(book);
    }
  }
}

class Library {
  students: Student[]; //All the students who are registered in the library
  books: Book[]; // All the books in the library including the ones that student took


  active_students: Student[]; // represents the students in the library
  available_books: Book[]; // represnts the available books in the library

  enter(student: Student): void {
    this.active_students.push(student);
  }

  exit(student: Student): void {
    const index = this.active_students.indexOf(student);
    if (index > 0) {
      this.active_students.splice(index, 1);
    }
    // we need to remove the user from the active_students;
  }


  reserveABook(book: Book, student: Student): void {
    const index = this.available_books.indexOf(book);
    if (index > 0) {
      this.available_books.splice(index, 1);
      student.reserveBook(book);
    }


  }

  returnABook(student: Student, book: Book): void {
    student.returnBook(book);
    this.available_books.push(book);

  }

}

const vinay = new Student('vinay', '1000236');

const santhosh = new Student('santhosh', '1000233');
const aravind = new Student('aravind', '1000238');
console.log(vinay);
console.log(santhosh);
console.log(aravind);




const harryPotter= new Book('the sorcers stone');
console.log(harryPotter);

