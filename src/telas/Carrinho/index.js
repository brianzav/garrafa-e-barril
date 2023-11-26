import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { CartContext } from '../../../src/CartContextProvider'; 

const Carrinho = () => {
  const { cartItems, decreaseQuantity, increaseQuantity, removeFromCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Text>Cantidad: {item.quantity}</Text>
    </View>
  );

  if (cartItems.length === 0) {
    return (
      <View>
        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18 }}>O carrinho está vazio</Text>
      </View>
    );
  }

  return (
    <View>
      {cartItems.map((item) => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Text>R$ {item.price}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text>{item.quantity}</Text>
            <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => removeFromCart(item.id)}> 
            <Text>Remover</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 10,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  emptyCartText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
});

export default Carrinho;
