import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Product} from './model/Product';
import {navigate} from '@react-navigation/routers/lib/typescript/src/CommonActions';

const products: Product[] = [
  {id: 1, name: 'Laptop', price: 1000},
  {id: 2, name: 'Mouse', price: 200},
  {id: 3, name: 'Keyboard', price: 300},
  {id: 4, name: 'Phone Holder', price: 20},
  {id: 5, name: 'Vitamins', price: 20.3},
  {id: 6, name: 'Dog Food', price: 300},
  {id: 7, name: 'Heater', price: 1300},
];

const ProductList: React.FC = ({navigation}) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prevCartItems => [
      ...prevCartItems,
      {...product, quantity: 1},
    ]);
  };

  const onNavigateToCart = () => {
    navigation.navigate('Cart', {cartItems: cartItems});
  };

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Text style={styles.title}>ShopDemo</Text>
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => addToCart(item)}>
              <Image
                style={styles.itemImage}
                source={{uri: 'https://picsum.photos/1000'}}
              />
              <View style={styles.detailsContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {cartItems.length > 0 && (
        <View style={styles.cartContainer}>
          <Text style={styles.cartTitle}>
            Shopping Cart: {cartItems.length}
          </Text>

          <TouchableOpacity
            onPress={onNavigateToCart}
            style={styles.checkoutButton}>
            <Text>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
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
    justifyContent: 'space-between',
    borderWidth: 1,
    border: '#ccc',
    borderRadius: 5,
    height: 230,
    width: 180,
    backgroundColor: '#ffffff',
    margin: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    marginTop: 5,
    fontSize: 16,
    color: 'tomato',
  },
  productContainer: {
    padding: 5,
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
  itemImage: {
    height: 150,
    width: '100%',
  },
  detailsContainer: {
    margin: 10,
  },
  checkoutButton: {
    backgroundColor: 'tomato',
    borderRadius: 20,
    padding: 10,
  },
});

export default ProductList;
