import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

  constructor(private studentService: StudentService) {

  }

  @Post('add')
  addStudent(@Body() body) {
    const name = body['name'];
    return this.studentService.addStudent(name);
  }
  @Get('list')
  listStudents() {
    return this.studentService.getUsers();
  }
}