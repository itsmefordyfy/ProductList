import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ProductItem from './page-components/ProductItem';
import CartItem from './page-components/Cart';
import {Product} from './model/Product';
import {CartItem as Item} from './model/CartItem';

const products: Product[] = [
  {id: '1', name: 'Product 1', price: 10},
  {id: '2', name: 'Product 2', price: 20},
  {id: '3', name: 'Product 3', price: 30},
];

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.product.id === product.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      );
    } else {
      setCartItems(prevItems => [...prevItems, {product, quantity: 1}]);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <ProductItem item={item} addToCart={addToCart} />
        )}
        keyExtractor={item => item.id}
        style={styles.productList}
      />

      <Text style={styles.title}>Shopping Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({item}) => <CartItem item={item} />}
        keyExtractor={(item, index) => `${item.product.id}-${index}`}
        style={styles.cartList}
      />

      <Text style={styles.totalPrice}>
        Total: ${calculateTotalPrice().toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productList: {
    marginBottom: 16,
  },

  cartList: {
    marginBottom: 16,
  },

  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
