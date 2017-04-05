import { Component } from '@angular/core';

enum Category {
    vagetable = 1,
    fruit = 2,
    berry = 3
}

export class Product {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product: Product = {
    name: 'Watermelon',
    description: 'Sweet and juicy',
    price: 650,
    category: 3,
    isAvailable: true
  };
  ingredients: String[] = [
    'Juice',
    'Sweetness',
    'Some lines and green color'
  ];
}
