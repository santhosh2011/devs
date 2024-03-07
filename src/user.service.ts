import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  users: User[];

  constructor() {
    this.users = [];
  }

  addUser(user: User) {
    this.users.push(user);
    console.log(`Added user ${user.firstName}`);
  }

  getUsers(): User[] {
    return this.users;
  }

}