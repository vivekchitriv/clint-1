import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = ''
  password = ''

  constructor() { }

  ngOnInit(): void {
  }

  onSignin() {
    console.log(`email: ${this.email}`)
    console.log(`password: ${this.password}`)
  }

  onCancel() {
    this.email = ''
    this.password = ''
  }

}
