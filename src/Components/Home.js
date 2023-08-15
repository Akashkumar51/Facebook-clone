import React,{useState} from 'react'
import Create from './Create'
import Login from './Login'
import "./Home.css"

function Home() {
    const [data, setData] = useState("")
    const [showLogin, setShowLogin] = useState(false)
    console.log(data);
    
    function changelog(showlogin,data) {
      setShowLogin(!showlogin)
      setData("")
    }
    
    return (
      <>
        <div className="app">
          <h1 className='face'>Facebook</h1>
          {data === "" ?
          (showLogin === false? <Create showLogin={showLogin} data={data} changelog={changelog} setData = {setData} /> : <Login showLogin={showLogin} data={data} changelog={changelog} />)
          :
          <h2 className='data-text'>{data}</h2>
          }
            {/* <button onClick={() => changelog(showLogin,data)} className='login'>{showLogin === false ? "Login" : "SignUp"} </button> */}
        </div>
        
        </>
      );
}

export default Home