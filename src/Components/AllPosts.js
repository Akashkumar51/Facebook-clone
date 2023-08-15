import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./AllPosts.css"
import Navbar from './Navbar'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function AllPosts() {
    const navigate = useNavigate()
    const [allPosts, setAllPosts] = useState([])
    const [like, setLike] = useState(0)
    const [userData, setUserData] = useState("")


    useEffect(() => {
      axios.post("http://localhost:8000/token-verify", { token: Cookies.get("token") })
      .then(function (response) {
          // handle success
          if (response.data.data !== undefined) {
              setUserData(response.data.data)
              console.log(response.data.data);
          } 
      })
    }, [])
    

    useEffect(() => {
        axios.get("http://localhost:8000/all-posts",)
            .then(function (response) {
                // handle success
                setAllPosts(response.data.data)
                console.log(response.data.data);

            })       
    }, [])

    function SinglePost(id) {
      navigate(`/single-post/${id}`)
    }
  return (
    <div className='allposts'>
    <Navbar value={""} userData={userData}/>
     {allPosts.length > 0 ? allPosts.map((data,index) => (
      <div onClick={() => SinglePost(data._id)} key={index} className='post-mains'>
        <div className='post-title' >{data.title}</div>
        {/* <div className='user-name'>{data.user_id}</div> */}
        <img src={`http://localhost:8000/${data.image}`} alt="" className='allpost-image' />
        <div className='post-subject'>{data.subject}</div>
        <div className='create-date'>{"Tue Feb 01 22"}</div>
        <div className='post-body'>
          <h4 onClick={() => setLike(like +1)}>{like}Like</h4>
          <h4>0 Comment</h4>
        </div>
      </div>
     ))  : "No Post.."}
    </div>
  )
}

export default AllPosts