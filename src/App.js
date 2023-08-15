import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Create from './Components/Create'
import Login from './Components/Login'
import Post from './Components/Post';
import AllPosts from './Components/AllPosts';
import SinglePost from './Components/SinglePost';

function App() {
return (
  <BrowserRouter>
  <Routes>
    <Route path ="/" element = {<AllPosts/>} />
    <Route path ="/create" element = {<Create/>} />
    <Route path ="/login" element = {<Login/>} />
    <Route path ="/Post" element = {<Post/>} />
    <Route path ="/allpost" element = {<AllPosts/>} />
    <Route path='/single-post/:id' element = {<SinglePost/>}/>
  </Routes>
  </BrowserRouter>
  
  );
}

export default App;
