import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Product} from './model/Product';
import {Item} from './model/Item';

const Cart: React.FC = ({route}) => {
  const cartItems: Product[] = route.params.cartItems;

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item: Item) => total + item.price * item.quantity,
      0,
    );
  };

  // Create a helper function to merge items
  const mergeItems = (items: Product[]) => {
    const mergedItems: Product[] = [];
    items.forEach((item: Item) => {
      const existingItem: Item[] = mergedItems.find(
        (mergedItem: Product) => mergedItem.name === item.name,
      );
      if (existingItem) {
        existingItem.quantity += item.quantity; // Increase quantity
      } else {
        mergedItems.push({...item}); // Add a new item
      }
    });
    return mergedItems;
  };

  // Merge items before rendering
  const mergedCartItems: Product[] = mergeItems(cartItems);

  return (
    <View style={styles.container}>
      <View style={styles.itemListContainer}>
        <Text style={styles.title}>Product List</Text>
        {mergedCartItems.map(item => (
          <View key={item.id}>
            <Text style={styles.cartItem}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.cartContainer}>
        <Text style={styles.totalPrice}>
          Total: ${calculateTotalPrice().toFixed(2)}
        </Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
  },
  cartContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },

  checkoutButton: {
    backgroundColor: 'tomato',
    borderRadius: 20,
    padding: 10,
  },
  itemListContainer: {
    padding: 10,
  },
});

export default Cart;
