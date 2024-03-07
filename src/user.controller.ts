import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('/user/')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Post('add')
  addUser(@Body() body) {
    const user: User = new User(body['firstName'], body['lastName'], body['age']);
    this.userService.addUser(user);
  }

  @Get('list')
  listUsers(): User[] {
    return this.userService.getUsers();
  }


}