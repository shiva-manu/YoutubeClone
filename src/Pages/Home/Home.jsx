import React from 'react';
import './Home.css';
import SideBar from '../../Components/SiderBar/SideBar';
import Feed from '../../Components/Feed/Feed';
const Home = ({sideBar}) => {
  return (
    <>
    <SideBar sideBar={sideBar}/>
    <div className={`container ${sideBar?"":"large-container"}`}>
      <Feed/>
    </div>
    </>
  )
}

export default Home
