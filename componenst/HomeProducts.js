import { useNavigation } from "@react-navigation/native";
import { Image, Flex ,ScrollView,Pressable,Heading,Text,Box} from "native-base";
import React, { useEffect, useState } from "react";
import Colors from "../data/Colors";
import products from "../data/Products";
import Rating from "./Rating";

function HomeProduct(){

  const navigation = useNavigation();
  

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
      flexWrap='wrap'
      direction="row"
      justifyContent="space-between"
      px={6}
      >
        {
          products.map((product) =>(
            <Pressable
            onPress={() => navigation.navigate("Detail", product)}
            key={product.id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
            >
              <Image
              source={{uri:product.image}}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
              />
              <Box px={4} pt={1}>
                <Heading size="sm" bold>
                    {product.price}
                </Heading>
                <Text fontSize={10} mt={1} isTruncated w="full">
                    {product.name}
                </Text>
                {/* rating */}
                <Rating value={product.rating}/>
              </Box>
            </Pressable>
          ))
        }
      </Flex>
    </ScrollView>
  );
}
export default HomeProduct;
