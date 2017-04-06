import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

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
