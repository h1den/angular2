import { Product } from './product';
import { Category } from './category.enum';

export const PRODUCTS: Product[] = [
    {
        name: 'Watermelon',
        description: 'Sweet and juicy',
        price: 650,
        category: Category.BERRY,
        isAvailable: true
    },
    {
        name: 'Banana',
        description: 'tasty and soft',
        price: 111,
        category: Category.FRUIT,
        isAvailable: true
    },
    {
        name: 'Eggfruit',
        description: 'Some weird stuff',
        price: 30000,
        category: Category.VAGATABLE,
        isAvailable: false
    }
];