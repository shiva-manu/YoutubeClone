import React from 'react';
import './SideBar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import technology from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';
const SideBar = ({sideBar}) => {
  return (
    <div className={`sidebar ${sideBar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="sidelinks">
          <img src={home} alt="HomeIcon"/><p>Home</p>
        </div>
        <div className="sidelinks">
          <img src={game_icon} alt="HomeIcon"/><p>Gaming</p>
        </div>
        <div className="sidelinks">
          <img src={automobiles} alt="HomeIcon"/><p>Automobiles</p>
        </div>
        <div className="sidelinks">
          <img src={sports} alt="HomeIcon"/><p>Sports</p>
        </div>
        <div className="sidelinks">
          <img src={entertainment} alt="HomeIcon"/><p>Entertainment</p>
        </div>
        <div className="sidelinks">
          <img src={technology} alt="HomeIcon"/><p>Technology</p>
        </div>
        <div className="sidelinks">
          <img src={music} alt="HomeIcon"/><p>Music</p>
        </div>
        <div className="sidelinks">
          <img src={blogs} alt="HomeIcon"/><p>Blogs</p>
        </div>
        <div className="sidelinks">
          <img src={news} alt="HomeIcon"/><p>News</p>
        </div>
        <hr />
      </div>
      <div className='subscribed-list'>
        <h3>Subscribed</h3>
        <div className='side-link'>
          <img src={jack} alt="jackImg" /><p>PewDiePie</p>
        </div>
        <div className='side-link'>
          <img src={simon} alt="jackImg" /><p>Mr.Beast</p>
        </div>
        <div className='side-link'>
          <img src={tom} alt="jackImg" /><p>Justin Biebar</p>
        </div>
        <div className='side-link'>
          <img src={megan} alt="jackImg" /><p>5-minute-Crafts</p>
        </div>
        <div className='side-link'>
          <img src={cameron} alt="jackImg" /><p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
