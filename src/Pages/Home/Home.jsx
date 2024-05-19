import React from 'react';
import './Home.css';
import SideBar from '../../Components/SiderBar/SideBar';
const Home = ({sideBar}) => {
  return (
    <>
    <SideBar sideBar={sideBar}/>
    </>
  )
}

export default Home
