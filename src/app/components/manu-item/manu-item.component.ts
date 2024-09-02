import {Component, Input} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-manu-item',
  templateUrl: './manu-item.component.html',
  styleUrls: ['./manu-item.component.css']
})
export class ManuItemComponent {
  @Input()
  menuItem:MenuItem = {};
}
