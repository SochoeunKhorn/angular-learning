import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-my-third',
  templateUrl: './my-third.component.html',
  styleUrls: ['./my-third.component.css']
})
export class MyThirdComponent {
  msg:string="";

  @Output()
  toParent:EventEmitter<string> = new EventEmitter<string>();

  clickSend(){
    this.toParent.emit(this.msg);
  }
}
