export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ProductItemProps {
  item: Product;
  addToCart: (product: Product) => void;
}
