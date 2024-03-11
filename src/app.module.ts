import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { NoopGraphInspector } from '@nestjs/core/inspector/noop-graph-inspector';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, StudentController, BookController],
  providers: [AppService, UserService, StudentService, BookService],
})
export class AppModule {
}
