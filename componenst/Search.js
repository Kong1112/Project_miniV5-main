import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { Image, Flex, ScrollView, Pressable, Heading, Box, Text, View } from "native-base";
import Rating from './Rating';
import Colors from '../data/Colors';


const Search = ({ data, input, setInput }) => {
    const navigation = useNavigation();
    return (
        <FlatList
        showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                marginTop: 10,
                paddingBottom: 50,
                marginLeft:20
            }}
            numColumns={2}
            data={data}
            renderItem={({ item }) => {
                if (input === "") {
                    return (
                        <Pressable
                            onPress={() => navigation.navigate("Detail", item)}
                            key={item.id}
                            w="45%"
                            bg={Colors.white}
                            rounded="md"
                            shadow={2}
                            pt={2}
                            my={3}
                            pb={2}
                            overflow="hidden"
                            marginRight={4}
                        >
                            <Image
                                source={{ uri: item.image }}
                                alt={item.name}
                                w={200}
                                h={24}
                                resizeMode="contain"
                            />
                            <Box px={4} pt={1}>
                                <Heading size="sm" bold>
                                    ฿ {item.price}
                                </Heading>
                                <Text fontSize={12} mt={1} isTruncated w="full" bold>
                                    {item.name}
                                </Text>
                                {/* rating */}
                                <Rating value={item.rating} />
                            </Box>
                        </Pressable>

                    )
                }

                if (item.name.toLowerCase().includes(input.toLowerCase())) {
                    return (
                        <Pressable
                            onPress={() => navigation.navigate("Detail", item)}
                            key={item._id}
                            w="45%"
                            bg={Colors.white}
                            rounded="md"
                            shadow={2}
                            pt={2}
                            my={3}
                            pb={2}
                            overflow="hidden"
                            marginRight={4}
                        >
                            <Image
                                source={{ uri: item.image }}
                                alt={item.name}
                                w={200}
                                h={24}
                                resizeMode="contain"
                            />
                            <Box px={4} pt={1}>
                                <Heading size="sm" bold>
                                    {item.price}
                                </Heading>
                                <Text fontSize={12} mt={1} isTruncated w="full" bold>
                                    {item.name}
                                </Text>
                                {/* rating */}
                                <Rating value={item.rating} />
                            </Box>
                        </Pressable>
                    )
                }
            }
        }
    />

)}


export default Search;