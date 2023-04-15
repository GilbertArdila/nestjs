import { Product } from 'src/products/entities/Products.entity';
import { User } from './Users.entity';

export class Order {
  date: Date;
  user: User;
  products: Product[];
}
