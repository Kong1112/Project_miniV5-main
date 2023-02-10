import { Heading,Text,Box} from "native-base";
import React from 'react'
import Colors from "../data/Colors";
import Message from "./Message";
import Rating from "./Rating";

export default function Review() {
  return (
    <Box my={9}>
        <Heading bold fontSize={15} mb={2}>
            REVIEW
        </Heading>
        <Message
            color={Colors.orange}
            bg={Colors.bisque1}
            bold
            children={"NO REVIEW"}
        />
        <Box p={3} bg={Colors.bisque1} mt={5} rounded={5}>
            <Heading fontSize={15} color={Colors.black}>
                User Doe
            </Heading>
            <Rating value={4}/>
            <Text 
            my={2}
            fontSize={14}
            >Jen 11 2023</Text>
            <Message
                bg={Colors.white}
                color={Colors.black}
                size={12}
                children ={
                    "Shopee เป็นแพลตฟอร์มอีคอมเมิร์ซชั้นนำในเอเชียตะวันออกเฉียงใต้และไต้หวัน เปิดตัวในปี 2015"
                }
            />
        </Box>
    </Box>
  )
}