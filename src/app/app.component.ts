import { Component } from '@angular/core';
import {Account} from "./model/account";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-taikhoan-angular';

  accounts: Account[] = [];

  constructor() {
    this.accounts.push(new Account('chienpro', '123456', 'https://tse4.mm.bing.net/th?id=OIP.bBmrLy-wpchPE8VyxndfxQHaEo&pid=Api&P=0&w=295&h=185')),
    this.accounts.push(new Account('minhdepxai', '123456', 'https://tse4.mm.bing.net/th?id=OIP.bBmrLy-wpchPE8VyxndfxQHaEo&pid=Api&P=0&w=295&h=185')),
    this.accounts.push(new Account('chuõnginhgai', '123456', 'https://tse4.mm.bing.net/th?id=OIP.bBmrLy-wpchPE8VyxndfxQHaEo&pid=Api&P=0&w=295&h=185'))
  }
}
