import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // will be used for 
  // - getting user's input 
  // - giving user existing values
  firstName = ''
  lastName = ''
  address = 'this is a test address'
  phone = ''
  email = ''

  constructor() { }

  ngOnInit(): void {
  }

  onSignup() {
    console.log(`first name: ${this.firstName}`)
    console.log(`last name: ${this.lastName}`)
    console.log(`address: ${this.address}`)
    console.log(`phone: ${this.phone}`)
    console.log(`email: ${this.email}`)
  }

  onCancel() {
    this.firstName = ''
    this.lastName = ''
    this.address = ''
    this.phone = ''
    this.email = ''
  }
}
