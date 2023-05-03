import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ProductItemProps} from '../model/Product';

const ProductItem: React.FC<ProductItemProps> = ({item, addToCart}) => {
  return (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => addToCart(item)}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
  },
  addToCartButton: {
    backgroundColor: 'tomato',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductItem;
