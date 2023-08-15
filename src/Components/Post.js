import React, { useState, useEffect } from 'react'
import "./Post.css"
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Post() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [subject, setSubject] = useState("")
    const [data, setData] = useState("")
    const [userData, setUserData] = useState("")
    const [image, setImage] = useState("")
    console.log(image,14);

    function PostData(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title',title)
        formData.append('subject',subject)
        formData.append('image',image)
        if (title !== "" && subject !== "" && image !== "") {
        axios.post("http://localhost:8000/post-create", formData)
            .then(function (response) {
                // handle success
                console.log(response);
                if (response.data.message) {
                    setData(response.data.message)
                    console.log(response.data.message);
                    navigate("/allpost")

                }else{
                    setData("Please Ty Again")
                }

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
}

    useEffect(() => {
        axios.post("http://localhost:8000/token-verify", { token: Cookies.get("token") })
            .then(function (response) {
                // handle success
                if (response.data.data !== undefined) {
                    setUserData(response.data.data)
                    console.log(response.data.data);
                } else {
                    navigate("/login")
                }
            })
    }, [])


    return (
        <>
            {
                setUserData !== "" ?
                    <div className='post'>
                        <div className='post-main'>
                            <h1>{userData.first_name} {userData.surname}</h1>
                            <h2>{userData.email}</h2>
                            {data === "" ?
                                <form className='post-text' onSubmit={PostData}>
                                    <input type="file" onChange={(e)=> setImage(e.target.files[0])} />
                                    <input className='title' type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                                    <input className='subject' type="text" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                                    <button className='addpost' type='submit'>Add Post</button>
                                </form>
                            : <h2>{data}</h2>}
                        </div>
                    </div>

                : ""}
        </>
    )
}

export default Post