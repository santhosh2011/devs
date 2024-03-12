import { Injectable } from '@nestjs/common';
import { Student } from './entities/library';

@Injectable()
export class StudentService {
  students: Student[];

  currentid: number = 0;

  constructor() {
    this.students = [];
  }

  addStudent(name: string): Student {
    this.currentid = this.currentid + 1;
    const student = new Student(name, this.currentid);
    this.students.push(student);
    return student;
  }

  getUsers(): Student[] {
    return this.students;
  }

  getStudent(studentId: number): Student {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == studentId) {
        return this.students[i];
      }
    }

    return null;
  }
}