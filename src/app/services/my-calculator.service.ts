import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
//   // inject this service to root automatic, but we can use provider
// })
@Injectable()
export class MyCalculatorService {

  constructor() { }

  sum(value1:number,value2:number):number {
    return  +value1 + + value2;
  }

  sub(value1:number,value2:number):number {
    return  value1 - value2;
  }

  multiply(value1:number,value2:number):number {
    return  value1 * value2;
  }

  divide(value1:number,value2:number):number {
    return  value1 / value2;
  }
}
