import { View, Flex, ScrollView, Pressable, Heading, Text, Box, HStack, Center, Image, VStack } from "native-base";
import React from 'react';
import { SwipeListView } from "react-native-swipe-list-view";
import products from "../data/Products";
import Colors from "../data/Colors";
import { FontAwesome } from '@expo/vector-icons';


const Swiper = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey='0'
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0,2)}
    renderItem={renderItems }
    renderHiddenItem={renderHiddenItems}
    showsVerticalScrollIndicator={false} 
  />
);

const renderItems = (data,rowMap) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg={Colors.white}
        shadow={1}
        rounded={10}
        overflow="hidden"
      >
        <Center w="25%" bg={Colors.bisque1}>
        <Image source={{uri:data.item.image}} alt={data.item.name} w="full" h={24} resizeMode="contain"/>
        </Center>
        <VStack w="60%" px={2} space={2}>
          <Text isTruncated color={Colors.black} bold fontSize={16}>
              {data.item.name}
          </Text>
          <Text bold color={Colors.red}>
              ฿{data.item.price}
          </Text>
        </VStack>
        
      </HStack>
    </Box>
  </Pressable>
);

const renderHiddenItems = () => (
  <Pressable 
  w={50} 
  roundedTopRight={10} 
  roundedBottomRight={10} 
  h='88%' 
  ml='auto' 
  justifyContent="center" 
  bg={Colors.red}
  >
    <Center alignItems="center" space={2}>
    <FontAwesome name="trash" size={24} color={Colors.white} />
    </Center>
  </Pressable>
);

const CartItems = () => {
  return (
    <View mr={6}>
      <Swiper/>
    </View>
  )
};

export default CartItems;