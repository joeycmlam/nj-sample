import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'my first nesJS!';
  }

  getPrice(): string {
    return 'test';
  }
}
