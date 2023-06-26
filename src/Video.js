import './App.css';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import video1 from './videos/video-1.mp4'
import video2 from './videos/video-2.mp4'
import video3 from './videos/video-3.mp4'
import video4 from './videos/video-4.mp4'
import video5 from './videos/video-5.mp4'
import video6 from './videos/video-6.mp4'
import video7 from './videos/video-7.mp4'



function Video (props, ref){
    const videos = [video1, video2, video3, video4, video5, video6, video7]
    const [currentVideoIndex, setCurrentVideoIndex] = useState(Math.floor(Math.random() * videos.length));
    const videoRef = useRef()

    useImperativeHandle(ref, ()=>({
        play(){
            videoRef.current.play()           
        },
        pause(){
            videoRef.current.pause()
        }
    }))

    const handleNextVideo = () => {
        setCurrentVideoIndex((prevIndex) => {
          const nextIndex = prevIndex + 1
          if (nextIndex >= videos.length) {
            return 0 // Quay lại video đầu tiên nếu đã đến cuối mảng
          }
          return nextIndex
        })
    }
      
    const handlePrevVideo = () => {
        setCurrentVideoIndex((prevIndex) => {
          const newPrevIndex = prevIndex - 1
          if (prevIndex < 0) {
            return videos.length - 1 // Quay lại video cuối cùng nếu đã ở đầu mảng
          }
          return newPrevIndex
        })
    }

    return(
        <div className='relative'>
            <video
                ref={videoRef}
                controls
                width={350}
                src = {videos[currentVideoIndex]}
                />
                <span className='absolute inset-y-1/3 right-0 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150' onClick={handlePrevVideo}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
                <span className='absolute inset-y-1/2 right-0 transition ease-in-out hover:translate-y-1 hover:scale-110 duration-150' onClick={handleNextVideo}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
        </div>
    )
}

export default forwardRef(Video)