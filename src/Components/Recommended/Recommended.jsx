import React, { useEffect,useState } from 'react';
import './Recommended.css';
import { Link } from 'react-router-dom';
import { apiKey } from '../../data';
import { valueConverter } from '../../data';
const Recommended = ({categoryId}) => {

   const [apiData,setApiData]=useState([]);

   const fetchData=async()=>{
      const relatedVideoUrl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${apiKey}`;
      await fetch(relatedVideoUrl).then(response=>response.json()).then(data=>setApiData(data.items));
   }
   useEffect(()=>{
      fetchData();
   },[])
  return (
    <div className="recommended">
      {
         apiData.map((item,id)=>{
            return(
               <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={id} className="side-video-list">
                  <img src={item.snippet.thumbnails.medium.url} alt="thumbnailImg" />
                  <div className="video-info">
                     <h4>{item.snippet.title}</h4>
                     <p>{item.snippet.channelTitle}</p>
                     <p>{valueConverter(item.statistics.viewCount)} Views</p>
                  </div>
               </Link>
            )
         })
      }
    </div>
  )
}

export default Recommended
