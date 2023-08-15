import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import { Routes, Route, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SinglePost() {
  let { id } = useParams();
  const navigate = useNavigate()
  const [singlePost, setSinglePost] = useState("")
  const [like, setLike] = useState(0)
  const [comments, setComments] = useState(0)
 

  useEffect(() => {
    axios.get(`http://localhost:8000/single-post/${id}`,)
      .then(function (response) {
        // handle success
        setSinglePost(response.data.data)
        console.log(response.data.data);

      })
  }, [])
  function comment(id) {
    navigate(`/comment/${id}`)
  }

  return (
    <div className='allposts'>
      <Navbar value={"signup"} />
      {singlePost !== "" ? 
      <div className='post-mains'>
        <div className='post-title' >{singlePost.title}</div>
        {/* <div className='user-name'>{singlePost.user_id.file.name}</div> */}
        <div className='post-subject'>{singlePost.subject}</div>
        <div className='create-date'>{"Tue Feb 01 22"}</div>
        <div className='post-body'>
          <h4 onClick={() => setLike(like +1)}>{like}Like</h4>
          <h4 onClick={()=> setComments(comments +1)}>{comments} Comment</h4>
        </div>
      </div> 
      : "Loading"}   
      </div>
  )
}

export default SinglePost