import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {

  products: Product[];
  addedProducts: Product[];
  
  constructor (private productService: ProductService) {}

  getHeroes(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getHeroes();  
  }

  onBuy(addedProduct): void {
    this.addedProducts.push(addedProduct);
  }
}
