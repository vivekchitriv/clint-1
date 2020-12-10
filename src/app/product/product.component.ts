import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // collect user input
  title = ''
  price = 0
  description = ''
  company = 'Apple'

  products = [
    { title: 'product 1',  price: 100, description: 'description 1', company: 'company 1' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.products.push({
      title: this.title,
      description: this.description,
      price: this.price,
      company: this.company
    })
    
    // after adding the product into the the array
    // remove the values entered by user
    this.onCancel()
  }

  onCancel() {
    this.title = ''
    this.price = 0
    this.company = 'Apple'
    this.description = ''
  }

  onDelete(i) {
    this.products.splice(i, 1)
  }
}
