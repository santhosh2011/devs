import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { getUserByName } from './user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    // this is a sample change
    return this.appService.getHello();
  }


  @Get('name')
  getName(): string {
    return 'Name';
  }

  @Get('userDetails')
  getUserDetails(@Query() query): any {

    const users = [
      { firstname: 'santhosh', lastname: 'thota', email: 'santhosh@gmail.com' },
      { firstname: 'santhosh', lastname: 'kumar', email: 'santhoshkumar@gmail.com' },
      {
        firstname: 'vinay',
        lastname: 'bandila',
        email: 'vinay@gmail.com',
      },
      { firstname: 'mouni', lastname: 'kalakoti', email: 'mouni@gmail.com' },
    ];


    const queryfirstName = query['firstname'];
    const querylastName = query['lastname'];


    if (queryName == null) {
      return users;
    }
    return getUserByName(users, queryName);

  }
}
