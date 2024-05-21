import React, { useEffect, useState } from 'react';
import './playVideo.css';
import { useParams } from 'react-router-dom';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import { apiKey } from '../../data';
import { valueConverter } from '../../data';
const playVideo = () => {
  const {videoId}=useParams();
  const [apiData,setApiData]=useState(null);
  const [channelData,setChannelData]=useState(null);
  const [commentData,setCommentData]=useState([]);
  const fetchVideoData=async()=>{
    //fetching videos Data
    const videoDetailsUrl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
    await fetch(videoDetailsUrl).then(response=>response.json()).then(data=>setApiData(data.items[0]))
  }
  const fetchOtherData=async()=>{
    //fetching channel Data
    const channelDataUrl=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${apiKey}`;
    await fetch(channelDataUrl).then(response=>response.json()).then(data=>setChannelData(data.items[0]));
    //fetching comments from api 
    const commentsApiUrl=` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${apiKey}`;
    await fetch(commentsApiUrl).then(response=>response.json()).then(data=>setCommentData(data.items))
  }
  useEffect(()=>{
    fetchVideoData();
  },[videoId]);
  useEffect(()=>{
    fetchOtherData();
  },[apiData]);
  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay unmuted ></video> */}
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className='play-video-info'>
         <p>{apiData?valueConverter(apiData.statistics.viewCount):"16k"} views &bull; 10 days ago</p>
         <div>
            <span><img src={like} alt="likeIcon" />{apiData?valueConverter(apiData.statistics.likeCount):"155"}</span>
            <span><img src={dislike} alt="disLikeIcon" />2</span>
            <span><img src={share} alt="shareIcon" />share</span>
            <span><img src={save} alt="saveIcon" />save</span>
         </div>
      </div>
         <hr />
         <div className="publisher">
          <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="jackImg" />
          <div>
            <p>{apiData?apiData.snippet.channelTitle:""}</p>
            <span>{channelData?valueConverter(channelData.statistics.subscriberCount):"1M"}</span>
          </div>
          <button>Subscribe</button>
         </div>
         <div className="video-description">
          <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
          <hr />
          <h4>{apiData?valueConverter(apiData.statistics.commentCount):106}</h4>
          {
            commentData.map((item,id)=>{
              return(
                <div key={id} className='comment'>
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="userProfile" />
            <div>
              <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}  <span>1 day</span> </h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className="comment-action">
                <img src={like} alt="likeIcon" />
                <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt="dislikeIcon" />
              </div>
            </div>
          </div>
              )
            })
          }
         </div>
    </div>
  )
}

export default playVideo
