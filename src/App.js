import './App.css';
import Video from './Video';
import { useRef } from 'react';

function App() {
  const videoRef = useRef()

  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <div className='w-full h-full'>
      <div className='m-5 w-1/4 '>
          <div>
            <h1 className='text-4xl italic'>Media Player</h1>
            <Video ref={videoRef}/>
          </div>
      <div className='relative'>
        <span onClick={handlePlay} className='absolute inset-x-1/4 '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 transition ease-in-out hover:translate-y-1 hover:scale-105 duration-100">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
          </svg>
        </span>
        <span onClick={handlePause} className='absolute inset-x-1/2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 transition ease-in-out hover:translate-y-1 hover:scale-105 duration-100">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </div>
    </div>
  );
}

export default App;