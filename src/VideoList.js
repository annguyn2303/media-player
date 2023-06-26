import React, { useState, useRef, useEffect } from 'react';
import './App.css'

const VideoList = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsTransitioning(true);

    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Thời gian transition, cần phù hợp với thời gian trong CSS

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, [currentVideoIndex]);

  const handleNextVideo = () => {
    setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videos.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex(prevIndex => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div>
      {videos.map((video, index) => (
        <video
          key={index}
          src={video}
          controls
          width="400"
          height="300"
          className={`video-transition ${index === currentVideoIndex && !isTransitioning ? 'active' : ''}`}
          style={{ display: index === currentVideoIndex ? 'block' : 'none' }}
          ref={(index === currentVideoIndex ? videoRef : null)}
        />
      ))}
      <div>
        <button onClick={handlePrevVideo}>Prev</button>
        <button onClick={handleNextVideo}>Next</button>
      </div>
      
    </div>
  );
};

export default VideoList;
