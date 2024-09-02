import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  counter = 0;
  msgFromChild:string='';
  value: string='';
  handleClick():void{
    this.counter++;
  }

  handleToParent(msg: string) {
    this.msgFromChild = msg;
  }
}
