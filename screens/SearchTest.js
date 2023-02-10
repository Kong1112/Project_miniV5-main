import { View, Text, StyleSheet, StatusBar, ScrollView, SafeAreaView, Image, TextInput, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { WINDOW_HEIGHT } from '../utils'
import Search from '../componenst/Search';
import Products from '../data/Products';
import { useNavigation } from "@react-navigation/native";
import Colors from '../data/Colors';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function SearchTest() {

  const animatedValue = useRef(new Animated.Value(0)).current;
  
  const [input, setInput] = useState("");
  const navigation = useNavigation();
  

  const searchInputAnimetion = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  const featureNameAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 30],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };


  const depositViewAnimetion ={
    transform:[
      {
        translateX: animatedValue.interpolate({
          inputRange:[0, 80],
          outputRange:[0, 50],
          extrapolate:'clamp'
        })
      },
      {
        translateY: animatedValue.interpolate({
          inputRange:[0, 100],
          outputRange:[0, -55],
          extrapolate:'clamp'
        })
      }
    ]
  };

  

  const withdrawViewAnimetion ={
    transform:[
      {
        translateX: animatedValue.interpolate({
          inputRange:[0, 80],
          outputRange:[0, 0],
          extrapolate:'clamp'
        })
      },
      {
        translateY: animatedValue.interpolate({
          inputRange:[0, 100],
          outputRange:[0, -55],
          extrapolate:'clamp'
        })
      }
    ]
  };

  const qrViewAnimetion ={
    transform:[
      {
        translateX: animatedValue.interpolate({
          inputRange:[0, 80],
          outputRange:[0, -45],
          extrapolate:'clamp'
        })
      },
      {
        translateY: animatedValue.interpolate({
          inputRange:[0, 100],
          outputRange:[0, -55],
          extrapolate:'clamp'
        })
      }
    ]
  };

  const scanViewAnimetion ={
    transform:[
      {
        translateX: animatedValue.interpolate({
          inputRange:[0, 80],
          outputRange:[0, -92],
          extrapolate:'clamp'
        })
      },
      {
        translateY: animatedValue.interpolate({
          inputRange:[0, 100],
          outputRange:[0, -55],
          extrapolate:'clamp'
        })
      }
    ]
  };

  

  const featureIconCricleAnimation ={
    opacity: animatedValue.interpolate({
      inputRange:[0, 25],
      outputRange:[1, 0],
      extrapolate:'clamp'
    })
  };

  const featureIconAnimation={
    opacity: animatedValue.interpolate({
      inputRange:[0, 50],
      outputRange:[0, 1],
      extrapolate:'clamp'
    })
  };
  
  
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      
      <SafeAreaView>
      <View style={styles.upperHeaderPlaceholder} />
      </SafeAreaView>

      <SafeAreaView style={styles.header}>
        <View style={styles.upperHeader}>
            <View style={styles.searchContainer} >
            
            <Image
            source={require("../assets/momo/search.png")}
            style={styles.searchIcon}
            /> 
            <AnimatedTextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            placeholder='Search Product'
            placeholderTextColor='rgba(255,225,255,0.8)'
            style={[styles.searchInput, searchInputAnimetion]}
            />
            </View>
            <AntDesign onPress={() => navigation.navigate("Cart")}
            name="shoppingcart" 
            size={22} 
            color="white"
            style={styles.bellICon}/>
            <Image
            source={require("../assets/momo/avatar.png")}
            style={styles.avatar}
            />
        </View>
        <View style={styles.lowerHeader}>
          <Animated.View style={[styles.feature, depositViewAnimetion]}>
          <Animated.Image 
            source={require("../assets/momo/deposit-circle.png")}
            style={[styles.featureIconCricle, featureIconCricleAnimation]} 
            />
            <Animated.Image
            source={require("../assets/momo/deposit.png")}
            style={[styles.featureIcon, featureIconAnimation]} 
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              Input
            </Animated.Text>
          </Animated.View>

          <Animated.View style={[styles.feature, withdrawViewAnimetion]}>
          <Animated.Image
            source={require("../assets/momo/withdraw-circle.png")}
            style={[styles.featureIconCricle, featureIconCricleAnimation]} 
            />
            <Animated.Image
            source={require("../assets/momo/withdraw.png")}
            style={[styles.featureIcon, featureIconAnimation]} 
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              price
              </Animated.Text>
          </Animated.View>

          <Animated.View style={[styles.feature, qrViewAnimetion]}>
          <Animated.Image
            source={require("../assets/momo/qr-circle.png")}
            style={[styles.featureIconCricle, featureIconCricleAnimation]} 
            />
            <Animated.Image
            source={require("../assets/momo/qr.png")}
            style={[styles.featureIcon, featureIconAnimation]} 
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              QR
              </Animated.Text>
          </Animated.View>

          <Animated.View style={[styles.feature, scanViewAnimetion]}>
          <Animated.Image
            source={require("../assets/momo/scan-circle.png")}
            style={[styles.featureIconCricle, featureIconCricleAnimation]} 
            />
            <Animated.Image
            source={require("../assets/momo/scan.png")}
            style={[styles.featureIcon, featureIconAnimation]} 
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              Scan
              </Animated.Text>
          </Animated.View>

        </View>
      </SafeAreaView>

      <ScrollView 
      onScroll={e => {
        const offsetY = e.nativeEvent.contentOffset.y;
        animatedValue.setValue(offsetY);
      }}
      scrollEventThrottle={16}>
        <View style={styles.paddingForHeader}/>
        <View style={styles.scrollViewContent}>
        <Search data={Products} input={input} setInput={setInput} />
        </View>
      </ScrollView>
      
    </View>
  )
}

const UPPER_HEADER_HEIGHT = 40;
const LOWER_HEADER_HEIGHT = 96;
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        position:"absolute",
        width:"100%",
        backgroundColor:"#530caf"
    },
    upperHeader:{
        height:UPPER_HEADER_HEIGHT,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:16,
    },
    searchInput:{
      position:"absolute",
      width:"100%",
      backgroundColor:'rgba(255,225,255,0.3)',
      color:"#ffffff",
      borderRadius:4,
      paddingVertical:2,
      paddingLeft:32,      
    },
    searchContainer:{
      flex:1,
      justifyContent:"center",
    },
    searchIcon:{
      height:16,
      width:16,
      marginLeft:10,
    },
    bellICon:{
      marginHorizontal:32,
    },
    avatar:{
      width:28,
      height:28,
    },
    lowerHeader:{
        height:LOWER_HEADER_HEIGHT,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        paddingHorizontal:16,
    },
    featureIconCricle:{
      width:32,
      height:32,
    },
    featureIcon:{
      width:16,
      height:16,
      position:"absolute",
      top:8,
    },
    featureName:{
      fontWeight:"bold",
      fontSize:12,
      lineHeight:14,
      color:"white",
      marginTop:12,
      marginLeft:4
    },
    upperHeaderPlaceholder:{
        height:UPPER_HEADER_HEIGHT
    },
    paddingForHeader:{
        height:LOWER_HEADER_HEIGHT
    },
    scrollViewContent:{
        backgroundColor:Colors.subblue,
    },
})