import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  //template: `<h1>Component</h1>`,
  styleUrls: ['./my-first.component.css']
})

/* == class : model business logic ==*/
export class MyFirstComponent {
  /* == variable type string == */
  @Input()
  author:string='';

  value:string = '';
  displayMessage:boolean = false;

  msgList:Array<string> = [];
  msgCompose:any[] = [];

  /* ==  method return void == */
  click():void{
    /*this.displayMessage = !this.displayMessage;*/
    if (this.value != '')
      this.msgList.push(this.value);
    this.msgCompose.push({
      value:this.value,
      visible:true
    })
    this.value = '';
    console.log(this.msgList);
  }
}
