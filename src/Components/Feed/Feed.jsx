import React, { useEffect, useState } from 'react'
import './Feed.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';
import { apiKey } from '../../data';
const Feed = ({category}) => {
  const fetchData=async()=>{
    const [data,setData]=useState([])
    const videoListUrl=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${apiKey}`;
    await fetch(videoListUrl).then(response=>response.json()).then(data=>setData(data.items));
  }
  useEffect(()=>{
    fetchData();
  },[category])
  return (
   <div className='feed'>
      <Link to={`video/20/4521`} className='card'>
      <img src={thumbnail1} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </Link>
    <div className='card'>
      <img src={thumbnail2} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail3} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail4} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail5} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail6} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail7} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail8} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail1} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail2} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail3} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail4} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail5} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail6} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail7} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail8} alt="thumbnail" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
      <h3>GreatStack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
   </div>
  )
}

export default Feed