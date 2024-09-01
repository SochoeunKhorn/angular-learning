import { Component } from '@angular/core';
import {MyCalculatorService} from "../services/my-calculator.service";

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css']
})
export class MyServiceComponent {
  value1=0;
  value2=0;
  result: number=0;

  /* == inject service == */
  constructor(
    private readonly myService:MyCalculatorService
  ) {
  }

  /* == using == */
  sum(){
    this.result = this.myService.sum(this.value1,this.value2);
  }
  sub(){
    this.result = this.myService.sub(this.value1,this.value2);
  }
  multiply(){
    this.result = this.myService.multiply(this.value1,this.value2);
  }
  divide(){
    this.result = this.myService.divide(this.value1,this.value2);
  }
}
