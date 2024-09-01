import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.css']
})
export class MySecondComponent {

  @Input()
  author = "";

  @Output()
  clickedCounter:EventEmitter<void> = new EventEmitter<void>();

  onClicked():void{
    this.clickedCounter.emit();
  }
}
