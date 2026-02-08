import { Avatar, Flex, Text } from '@chakra-ui/react'


const Message = ({ownMessage}) => {
  return (
    <>
    {ownMessage ?
     (
    <Flex gap={2}  alignSelf={"flex-end"}>
     
      <Text maxW={"300px"} bg={"blue.400"} p={1} borderRadius={"md"}>
         nam veritatis reprehenderit suscipit sed perspiciatis,
         hic maiores minima.
       </Text>
        <Avatar src='' w="7" h={7} mr={2}/>
 
    </Flex>

       ): (
        
        <Flex gap={2}  >
          <Avatar src='' w="7" h={7} ml={1}/>
          <Text maxW={"300px"} bg={"gray.400"} p={1} borderRadius={"md"} color={'black'}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
        </Flex>
    )}
    </>
  )
}

export default Message