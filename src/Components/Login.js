import React, { useState } from 'react'
import axios from 'axios';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from './Navbar'

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  function fetchData(e) {
    e.preventDefault()
    if (email !== "" && password !== "") {
      axios.post("http://localhost:8000/login", { email: email, password: password },{withCredentials: true})
        .then(function (response) {
          // handle success
          setData(response.data.message)
          if (response.data.data !== "") {
            Cookies.set("token",`${response.data.data}`)
            navigate("/post")
          }

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

    } else {
      setErrorMessage("Please enter value..")
    }

  }

  return (

    <div className='login'>
      <Navbar value={"login"}/>
      <div className='main-accounts'>
        {data === "" ?
          <form className='accounts' onSubmit={fetchData}>
            <h1>Login</h1>
            <div className='emails'>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='numbers' type="email" placeholder='Mobile number or email address' />
            </div>
            <div className='new-passwords'>
              <input value={password} onChange={(e) => setPassword(e.target.value)} className='passwords' type="password" placeholder='New password' />
            </div>
            <button className='submit' type='submit'>Submit</button>
          </form>
          : <h2 className='data-text'>{data}</h2>}
        {errorMessage !== "" ? <h2>{errorMessage}</h2> : ""}
        <h3 onClick={() => navigate("/create")}>Create an accout ?</h3>
      </div>
    </div>
  )
}

export default Login