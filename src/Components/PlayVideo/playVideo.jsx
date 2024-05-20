import React from 'react';
import './playVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import userProfile from '../../assets/user_profile.jpg';
const playVideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls autoPlay unmuted ></video>
      <h3>Best Youtube Channel to Learn Web Development</h3>
      <div className='play-video-info'>
         <p>1525 views &bull; 2 days ago</p>
         <div>
            <span><img src={like} alt="likeIcon" />125</span>
            <span><img src={dislike} alt="disLikeIcon" />2</span>
            <span><img src={share} alt="shareIcon" />share</span>
            <span><img src={save} alt="saveIcon" />save</span>
         </div>
      </div>
         <hr />
         <div className="publisher">
          <img src={jack} alt="jackImg" />
          <div>
            <p>GreatStack</p>
            <span>1M Subscribers</span>
          </div>
          <button>Subscribe</button>
         </div>
         <div className="video-description">
          <p>Channel that makes Learning Easy</p>
          <p>Subscribe GreatStack to Watch More Tutorials on Web Development</p>
          <hr />
          <h4>130 Comments</h4>
          <div className='comment'>
            <img src={userProfile} alt="userProfile" />
            <div>
              <h3>Jack Nicholson  <span>1 day</span> </h3>
              <p>You are amazing i remember when uou used to make small projects videos now your making clones for big apps this 10x more amazing keep posting we want series for big apps like this long videos</p>
              <div className="comment-action">
                <img src={like} alt="likeIcon" />
                <span>244</span>
                <img src={dislike} alt="dislikeIcon" />
              </div>
            </div>
          </div>
          <div className='comment'>
            <img src={userProfile} alt="userProfile" />
            <div>
              <h3>Jack Nicholson  <span>1 day</span> </h3>
              <p>You are amazing i remember when uou used to make small projects videos now your making clones for big apps this 10x more amazing keep posting we want series for big apps like this long videos</p>
              <div className="comment-action">
                <img src={like} alt="likeIcon" />
                <span>244</span>
                <img src={dislike} alt="dislikeIcon" />
              </div>
            </div>
          </div>
          <div className='comment'>
            <img src={userProfile} alt="userProfile" />
            <div>
              <h3>Jack Nicholson  <span>1 day</span> </h3>
              <p>You are amazing i remember when uou used to make small projects videos now your making clones for big apps this 10x more amazing keep posting we want series for big apps like this long videos</p>
              <div className="comment-action">
                <img src={like} alt="likeIcon" />
                <span>244</span>
                <img src={dislike} alt="dislikeIcon" />
              </div>
            </div>
          </div>
          <div className='comment'>
            <img src={userProfile} alt="userProfile" />
            <div>
              <h3>Jack Nicholson  <span>1 day</span> </h3>
              <p>You are amazing i remember when uou used to make small projects videos now your making clones for big apps this 10x more amazing keep posting we want series for big apps like this long videos</p>
              <div className="comment-action">
                <img src={like} alt="likeIcon" />
                <span>244</span>
                <img src={dislike} alt="dislikeIcon" />
              </div>
            </div>
          </div>
         </div>
    </div>
  )
}

export default playVideo
