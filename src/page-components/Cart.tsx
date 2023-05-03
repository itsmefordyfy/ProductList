import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CartItemProps} from '../model/CartItem';

const CartItem: React.FC<CartItemProps> = ({item}) => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemName}>{item.product.name}</Text>
      <Text style={styles.cartItemPrice}>${item.product.price.toFixed(2)}</Text>
      <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
  },
  cartItemQuantity: {
    fontSize: 14,
    color: '#888',
  },
});

export default CartItem;
