import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { maxElement } from '../mouni/MaximumElement';
import { reverseArray } from '../mouni/ReverseElements';
import { secondMax } from '../mouni/SecondMaxElement';
import { sumArray } from '../mouni/SumOfElements';

@Controller('/mouni')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // this is a sample change
    return this.appService.getHello();
  }

  // @Get('/name')
  // getUrlByName(): string {
  //   // this is a sample change
  //   return this.appService.getUrlByName();
  // }

  @Post('/max')
  getMaxElement(@Body() body): number {
    console.log(body);
    const arr: number[] = body['numbers'];
    return maxElement(arr);
  }

  @Post('/RevArray')
  ReverseArray(@Body() body): number[] {
    const arr: number[] = body['numbers'];
    return reverseArray(arr);
  }

  @Post('/SecondMax')
  SecondMaxInArray(@Body() body): number {
    const arr: number[] = body['numbers'];
    return secondMax(arr);
  }

  @Post('/SumArray')
  SumArray(@Body() body): number {
    const arr: number[] = body['numbers'];
    return sumArray(arr);
  }
}
