import { View, Text, ScrollView, TouchableOpacity, Image, ToastAndroid, Pressable, StyleSheet, } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Products from '../data/Products';
import Colors from '../data/Colors';
import { Button } from 'native-base';

const CartScreen = ({ navigation }) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from local DB by ID
  const getDataFromDB = async () => {
    let products = await AsyncStorage.getItem('cartItems');
    products = JSON.parse(products);
    let productData = [];
    if (products) {
      Products.forEach(data => {
        if (products.includes(data.id)) {
          productData.push(data);
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };

  //get total price of all items in the cart
  const getTotal = productData => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let price = productData[index].price;
      total = total + price;
    }
    setTotal(total);
  };

  const removeItemFromCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let index = 0; index < array.length; index++) {
        if (array[index] == id) {
          array.splice(index, 1);
        }
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        getDataFromDB();
      }
    }
  };

  //checkout

  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      return error;
    }

    ToastAndroid.show('เคลียร์สินค้าเรียบร้อย!', ToastAndroid.SHORT);

    navigation.navigate('Home');
  };


  const renderProducts = (data, index) => {
    return (
      <View style={{ backgroundColor: Colors.subblue }}>
        <TouchableOpacity
          key={data.key}
          onPress={() => navigation.navigate('Detail', data)}
          style={styles.renderproTou}>
          <View style={styles.viewimage}>
            <Image source={{ uri: data.image }} style={styles.vimage} />
          </View>
          <View style={styles.viewDetei}>
            <View>
              <Text
                style={styles.textname}>
                {data.name}
              </Text>
              <View
                style={styles.viewstyle}>
                <Text
                  style={styles.textprice}>
                  ฿ {data.price}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <View
                  style={styles.viewstyle1}>
                  <MaterialCommunityIcons
                    name="minus"
                    style={{
                      fontSize: 16,
                      color: Colors.lightSkyBlue,
                    }}
                  />
                </View>
                <Text>1</Text>
                <View
                  style={{
                    borderRadius: 100,
                    marginLeft: 20,
                    padding: 4,
                    borderWidth: 1,
                    borderColor: Colors.bisque1,
                    opacity: 0.5,
                  }}>
                  <MaterialCommunityIcons
                    name="plus"
                    style={{
                      fontSize: 16,
                      color: Colors.lightSkyBlue,
                    }}
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={() => removeItemFromCart(data.id)}>
                <MaterialCommunityIcons name="delete-outline" style={styles.delete} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>

    );
  };


  return (
    <View style={styles.viewCart}>
      <ScrollView>
        <Text style={styles.textCart}>
          Cart
        </Text>
        <View style={{ paddingHorizontal: 16 }}>
          {product ? product.map(renderProducts) : null}
        </View>
        <View style={styles.viewOrder}>
          <Text style={styles.textOrder}>
            Order Info
          </Text>
          <View
            style={styles.viewSub}>
            <Text style={styles.textSub}>
              ราคาสินค้า
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: Colors.black,
                opacity: 0.8,
              }}>
              ฿ {total}.00
            </Text>
          </View>
          <View style={styles.viewSpi}>
            <Text style={styles.textSpi}>
              ภาษีขนส่ง
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: Colors.black,
                opacity: 0.8,
              }}>
              ฿ {total / 20}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                maxWidth: '80%',
                color: Colors.black,
                opacity: 0.5,
              }}>
              ราคารวม
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: Colors.black,
              }}>
              ฿{total + total / 20}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => (total != 0 ? checkOut() : null)}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: Colors.blue,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: Colors.white,
              textTransform: 'uppercase',
            }}>
            CHECKOUT (฿ {total + total / 20} )
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen;

const styles = StyleSheet.create({
  renderproTou: {
    width: '100%',
    height: 100,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'white',
    borderRadius:10,
  },
  viewimage: {
    width: '30%',
    height: 100,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundLight,
    borderRadius: 10,
    marginRight: 22,
  },
  vimage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  viewDetei: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
  },
  textname: {
    fontSize: 14,
    maxWidth: '100%',
    color: Colors.black,
    fontWeight: '600',
    letterSpacing: 1,
  },
  textprice: {
    fontSize: 14,
    fontWeight: '400',
    maxWidth: '85%',
    marginRight: 4,
  },
  viewstyle: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
  },
  viewstyle1: {
    borderRadius: 100,
    marginRight: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: Colors.bisque1,
    opacity: 0.5,
  },
  delete: {
    fontSize: 16,
    color: Colors.lightSkyBlue,
    backgroundColor: Colors.bisque1,
    padding: 8,
    borderRadius: 100,
    marginRight:10
  },
  viewCart: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.subblue,
    position: 'relative',
  },
  textCart: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: '500',
    letterSpacing: 1,
    paddingTop: 20,
    paddingLeft: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  viewOrder: {
    paddingHorizontal: 16,
    marginTop: 40,
    marginBottom: 80,
  },
  textOrder: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 20,
  },
  viewSub: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  textSub: {
    fontSize: 14,
    fontWeight: '400',
    maxWidth: '80%',
    color: Colors.black,
    opacity: 0.5,
  },
  viewSpi: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  textSpi: {
    fontSize: 14,
    fontWeight: '400',
    maxWidth: '80%',
    color: Colors.black,
    opacity: 0.5,
  },
})