import { Injectable } from '@nestjs/common';

@Injectable()
export class HelperService {
  constructor() { }

  toUpper(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  getOffset(pageNo: number, limit: number): number {
    if (pageNo === 0) {
      pageNo = 1
    }
    let offsetVal: number = (pageNo - 1) * limit
    return offsetVal
  }
}
