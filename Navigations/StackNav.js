import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import DetailsProductScreen from '../screens/DetailsProductScreen';
import HomeProduct from '../componenst/HomeProducts';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Detail' component={DetailsProductScreen} />
        <Stack.Screen name='Cart' component={CartScreen} />
        <Stack.Screen name='Product' component={HomeProduct} />
      </Stack.Navigator>
  );
}

export default StackNav;

