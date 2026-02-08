import { useState , useEffect} from "react"
import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";
import Post from "../components/Post"
import useGetUserProfile from "../hooks/useGetUserProfile";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postAtom";

function UserPage() {
  const {user,loading} = useGetUserProfile();
  const showToast = useShowToast() 
  const {username} = useParams()
  const [posts, setPosts] = useRecoilState(postsAtom)
  const [fetchingPosts, setfetchingPosts] = useState(true)

  useEffect(() => {
    
    const getPosts = async ()=>{
      setfetchingPosts(true)
      try {
        console.log("user post is called")
        const res = await fetch(`/api/posts/user/${username}`);
        const data = await res.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        showToast("Error",error.message,"error");
        setPosts([])
      }finally{
        setfetchingPosts(false)
      }
    }

    
    getPosts();
  }, [username,showToast,setPosts])



  if(!user && loading){
    return(
      <Flex justifyContent={"center"} >
        <Spinner size="xl"/>
      </Flex>
    )}
    
  if(!user && !loading) return <h1>User not found</h1>

  if(!user) return null


  
  return (
    <>
    <UserHeader user={user}/>
    
     {!fetchingPosts && posts.length === 0 && <h1>User has not posts.</h1>}
     
     { fetchingPosts && (
      <Flex justifyContent={"center" } my={12}>
        <Spinner size={"xl"}/>
      </Flex>
     )}

     {posts.map((post)=>(
      <Post key={post._id} post={post} postedBy={post.postedBy}  />
     ))}

    {/* <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle="Let's talk about threads."/>
    <UserPost likes={451} replies={12} postImg="/post2.png" postTitle="Nice tutorial."/>
    <UserPost likes={321} replies={432} postImg="/post3.png" postTitle="I love this guy."/>
    <UserPost likes={232} replies={56}  postTitle="This is my first thread. I'm looking forward to when people can have unlimited connections on Thread soon!"/> */}
  
    </>
  )
}

export default UserPage