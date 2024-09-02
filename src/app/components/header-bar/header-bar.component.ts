import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {
  items: Array<MenuItem> = [
    {
      label:'Profile',
      icon:'pi pi-user'
    },
    {
      label:'Setting',
      icon:'pi pi-cog'
    },
    {
      separator:true
    },
    {
      label:'Sign Out',
      icon:'pi pi-sign-out'
    },
  ];

}
