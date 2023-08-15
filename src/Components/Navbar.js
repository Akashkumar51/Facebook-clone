import React,{useEffect,useState} from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


function Navbar(props) {
    const navigate = useNavigate()
    const [cookie, setCookie] = useState()
 
    
    function RemoveCookies() {
      Cookies.remove("token")
      setCookie("")
    }

    useEffect(() => {
      setCookie(Cookies.get("token") )
      console.log("klkl");   
    }, [cookie])
  
    console.log(cookie);
  return (
    <nav className='navbar'>
        <div className='title-name'>
            <h1>Facebook</h1>
        </div>
        <div className='header-buttons'>
          {props.value === "login" || props.userData !== ""  ? "" : 
            <button onClick={() => navigate("/login")} className='login-btn'>Login</button> }
            {props.value === "signup"  || props.userData !== ""? "" : 
            <button onClick={() => navigate("/create")} className='signup-btn'>Sign Up</button>
            }
            {props.userData !== "" ? 
            <button onClick={() => RemoveCookies()} className='signup-btn'>Logout</button> :""
            }
            {props.userData !== "" ? <div style={{color:"white", fontSize:"25px"}}> {props.userData && props.userData.first_name} { props.userData && props.userData.surname} </div>: ""}
        </div>
    </nav>
  )
}

export default Navbar