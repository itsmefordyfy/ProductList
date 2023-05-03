import {Product} from './Product';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartItemProps {
  item: CartItem;
}
