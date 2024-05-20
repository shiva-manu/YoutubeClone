import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import { Routes,Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Video from '../src/Pages/Video/Video';
import { useState } from 'react';
const App = () => {
  const [sideBar,setSideBar]=useState(true)
  return (
    <div>
      <NavBar className="Nav-bar" setSideBar={setSideBar}/>
      <Routes>
        <Route path="/" element={<Home sideBar={sideBar}/>}/>
        <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App
