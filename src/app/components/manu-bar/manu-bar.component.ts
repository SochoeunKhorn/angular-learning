import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-manu-bar',
  templateUrl: './manu-bar.component.html',
  styleUrls: ['./manu-bar.component.css']
})
export class ManuBarComponent {

  menu:Array<MenuItem> = [
    {label:'Home',icon:'pi pi-home'},
    {label:'Customer',icon:'pi pi-users'},
    {label:'Setting',icon:'pi pi-cog'}
  ];

}
