import { Injectable } from '@nestjs/common';


@Injectable()
export class EquityService {

  getCurrentPrice() : string {
    return 'test';
  }
}
