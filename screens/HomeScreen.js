import { Box, Text, View } from "native-base";
import React from "react";
import Colors from "../data/Colors";
import SearchTest from "./SearchTest";


function HomeScreen() {
   return (
    <Box flex={1} bg={Colors.subblue}>
      <SearchTest/> 
    </Box>
    );
}
export default HomeScreen;
