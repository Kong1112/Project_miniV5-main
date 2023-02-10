import React, { useContext, useEffect, useState } from 'react'
import { Image,  ScrollView, Heading, Text, Box, HStack, Spacer } from "native-base";
import Colors from '../data/Colors';
import Rating from '../componenst/Rating';
import Buttone from '../componenst/Buttone';
import Review from '../componenst/Review';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, ToastAndroid } from 'react-native';




function DetailsProductScreen({ route }) {

    const [value, setValue] = useState(0);
    const product = route.params;
    const navigation = useNavigation();

    //add to cart

  const addToCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'เพิ่มสินค้าเรียบร้อย',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    }
  };


    return (
        <Box safeArea flex={1} style={styles.bg}>
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image
                    source={{ uri: product.image }}
                    alt="Image" w="full"
                    h={300}
                    resizeMode="contain"
                />
                <HStack space={2} alignItems="center"  marginTop={5}>
                <Heading bold fontSize={15} mb={2} lineHeight={22} >
                    {product.name}
                </Heading>
                    <Spacer />
                    <Heading bold color={Colors.black} fontSize={19}>
                        ฿{product.price}
                    </Heading>
                </HStack>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />

                <Text lineHeight={24} fontSize={16} marginTop={8}>
                    {product.description}
                </Text>
                <Buttone 
                onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
                bg={Colors.blue} 
                color={Colors.white} mt={10}
                >
                    <Text
                    style={{
                        fontSize: 12,
                        fontWeight: '500',
                        letterSpacing: 1,
                        color: Colors.white,
                        textTransform: 'uppercase',
                      }}>
                    {product.isAvailable ? 'Add to cart' : 'Not Avialable'}
                    </Text>
                </Buttone>
                <Review />
            </ScrollView>
        </Box>
    )
}

export default DetailsProductScreen;

const styles = StyleSheet.create({
  bg:{
    backgroundColor:"#ffffff",
  }
})