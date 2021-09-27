import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input()
  accounts: Account[] = [];

  accountForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.minLength(3)),
    avartar: new FormControl('', Validators.required),
    password: new FormControl('', Validators.min(4)),
  })

  constructor() { }

  ngOnInit() {
  }

  createAcount() {
    this.accounts.push(this.accountForm.value);
    this.accountForm.reset();
  }

  deleteAccount(username) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].username === username) {
        this.accounts.splice(i, 1);
        return;
      }
    }
  }
  showAcount(username) {
      for (let i = 0; i< this.accounts.length; i++) {
        if (this.accounts[i].username === username) {
          this.accountForm.get('username').setValue(this.accounts[i].username);
          this.accountForm.get('password').setValue(this.accounts[i].password);
          this.accountForm.get('avartar').setValue(this.accounts[i].avartar);
          return;
        }
      }
  }

  editAcount() {
    const account = this.accountForm.value;
    for (let i = 0; i< this.accounts.length; i++) {
      if (this.accounts[i].username === account.username) {
        this.accounts[i] = account;
      }
    }
  }
}
