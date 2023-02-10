import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNav from "./Navigations/StackNav";


 export default function App() {
   return (
     <NativeBaseProvider>
       <NavigationContainer>
         <StackNav/>
       </NavigationContainer>
     </NativeBaseProvider>
   );
 }