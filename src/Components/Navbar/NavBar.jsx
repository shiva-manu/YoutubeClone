import React from 'react';
import './NavBar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search.png';
import uploadIcon from '../../assets/upload.png';
import moreIcon from '../../assets/more.png';
import notificationIcon from '../../assets/notification.png';
import profileIcon from '../../assets/jack.png';
import { Link } from 'react-router-dom';
const NavBar = ({setSideBar}) => {
  return (
   <nav className='flex-dev'>
      <div className='nav-left flex-div'>
        <img className='menuIcon'onClick={()=>{setSideBar(prev=>prev===false?true:false)}} src={menu_icon} alt="menuIcon"/>
        <Link to='/'><img className="logoIcon" src={logo} alt="logoIcon" /></Link>
      </div>
      <div className='nav-middle flex-div'>
        <div className="search-box flex-div">
        <input type="text" placeholder='Search' />
        <img src={searchIcon} alt="searchIcon"/>
        </div>
      </div>
      <div className='nav-right flex-div'>
        <img src={uploadIcon} alt="uploadIcon" />
        <img src={moreIcon} alt="moreIcon" />
        <img src={notificationIcon} alt="notificationIcon" />
        <img src={profileIcon} alt="profileIcon" className='userIcon'/>
      </div>
   </nav>
  )

}

export default NavBar
