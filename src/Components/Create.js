import React, { useState,useEffect } from 'react'
import "./Create.css"
import axios from 'axios';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'

function Create(props) {

    const navigate = useNavigate()

    const [first_name, setFirst_Name] = useState("")
    const [surname, setSurName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [date_of_birth, setDate_Of_Birth] = useState("")
    const [data, setData] = useState("")

    function fetchInput(e) {
        console.log(e);
        e.preventDefault()
        if (first_name !== "" && surname !== "" && email !== "" && password !== "" && date_of_birth !== "") {
            axios.post("http://localhost:8000/user-create", { first_name: first_name, surname: surname, email: email, password: password, date_of_birth: date_of_birth })
                .then(function (response) {
                    // handle success
                    setData(response.data.message)
                })
        } else {
            setData("Please enter all values")
        }

    }


    
    return (
        <div className='create'>
            <Navbar value= {"signup"}/>
            <div className='main-account'>
                {data === "" ?
                    <form className='account' onSubmit={fetchInput}>
                        <div className='heading'>
                            <h2>Create a new account</h2>
                            <p className='p-text'>
                                It's quick and easy.
                            </p>
                        </div>
                        <div className='name-text'>
                            <input value={first_name} onChange={(e) => setFirst_Name(e.target.value)} className='first' type="text" placeholder='First name' />
                            <input value={surname} onChange={(e) => setSurName(e.target.value)} className='first' type="text" placeholder='Surname' />
                        </div>
                        <div className='email'>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='number' type="email" placeholder='Mobile number or email address' />
                        </div>
                        <div className='new-password'>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className='password' type="password" placeholder='New password' />
                        </div>
                        <div className='dob'>
                            <p className='dob-text'>Date of birth <span>?</span></p>
                            <input value={date_of_birth} onChange={(e) => setDate_Of_Birth(e.target.value)} className='date' type="date" />
                        </div>
                        <button className='submit' type='submit'>Sign Up</button>
                    </form>
                    : 
                    <>
                    <h2>{data}</h2>
                    <h3 onClick={() => navigate("/login")}>Please Login</h3>
                    </>
                    }
                 {data === "" ? <h3 onClick={() => navigate("/login")}>Already have an account?</h3> : ""}
                
            </div>
        </div>
    )
}

export default Create