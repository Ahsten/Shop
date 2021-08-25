import React from 'react';
import video from './thievesvideo.mp4';

function Home() {
  //Display the home page with a video playing on loop and mute
  return (
    <div className="video">
      <video className="vid" src={video} autoPlay loop muted playsInline></video>
    </div>
  );
}

export default Home;
