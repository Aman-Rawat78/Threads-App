import { AddIcon } from '@chakra-ui/icons'
import { Button,Text, CloseButton, Flex, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, 
  ModalFooter, ModalHeader, ModalOverlay, Textarea, useColorModeValue, useDisclosure,
  Image,  } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import usePreviewImg from '../hooks/usePreviewImg'
import { useRecoilState, useRecoilValue } from 'recoil';
import userAtom from '../atoms/userAtom';
import useShowToast from '../hooks/useShowToast';
import {BsFillImageFill} from "react-icons/bs"
import postsAtom from '../atoms/postAtom';
import { useParams } from 'react-router-dom';

const MAX_CHAR = 500;

const CreatePost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [postText, setPostText] = useState("")
    const { handleImageChange,imgUrl,setImgUrl} = usePreviewImg();
    const imageRef = useRef(null)
    const [remainingChar, setRemainingChar] = useState(MAX_CHAR)
    const user = useRecoilValue(userAtom)
    const showToast = useShowToast()
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useRecoilState(postsAtom)
    const {username} = useParams()


     const handleTextChange = (e) =>{
      const inputText =  e.target.value;

      if(inputText.length > MAX_CHAR){
        const truncatedText = inputText.slice(0,MAX_CHAR)
        setPostText(truncatedText);
        setRemainingChar(0)
      }else{
        setPostText(inputText)
        setRemainingChar(MAX_CHAR - inputText.length)
      }
     }

     const handleCreatePost = async ()=>{
      setLoading(true)
      try {
        console.log("clicked")
       
         const res = await fetch("/api/posts/create",{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({postedBy: user._id, text: postText, img:imgUrl}),
         })
         const data = await res.json();
         console.log(data)
        
         if(data.error){
          showToast("Error",data.error,"error")
          return
         }
         showToast("Success","Post created successfully","success")

         if(username === user.username){
         setPosts([data,...posts])
         }

          onClose()
         setPostText("")
         setImgUrl("")
      } catch (error) {
        console.log(typeof error)
        if(typeof error === "object"){
          console.log(error)
          console.log({error})
          console.log(error.message)
        }
        showToast("Error", error.message, "error")
        
      }finally{
        setLoading(false)
      }
     }

  return (
    <>
    <Button  
        position={"fixed"}
        bottom={10}
        right={5}
        bg={useColorModeValue("gray.300", "gray.dark")}
        onClick={onOpen}
        size={{ base: "sm" ,sm: "md"}}
    >
     <AddIcon/>  
    </Button>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            
            <FormControl>

                <Textarea 
                placeholder='Post content goes here..'
                onChange={handleTextChange}
                value={postText}
                />

                <Text fontSize="xs" fontWeight="bold" textAlign={'right'} m={"1"} color={"gray.800"}>
                 {remainingChar}/{MAX_CHAR}
                </Text>

                <Input 
                 type='file'
                 hidden
                 ref={imageRef}
                 onChange={handleImageChange}
                />

                <BsFillImageFill
                 style={{marginLeft:"5px", cursor:"pointer"}}
                 size={16}
                 onClick={()=> imageRef.current.click()}
                />
                
            </FormControl>

              { imgUrl && (
                <Flex>
                <Image src={imgUrl} alt="Selected img"/>

                <CloseButton bg={"gray.800"} position={"absolute"}  top={2} right={2}
                 onClick={() =>{setImgUrl("") }}
                
                />
              </Flex>
              )}

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} isLoading={loading} onClick={handleCreatePost}>
              Post
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreatePost