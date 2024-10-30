// import { videoBg } from '../assets/images'; 

// const VideoBackground = ({ children }) => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden ">
//       <video className="absolute top-0 left-0 w-full h-full object-cover" src={videoBg} autoPlay loop muted playsInline />
//       <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default VideoBackground;


// import React from 'react';
// import { videoBg } from '../assets/images'; // Ensure this path is correct

// const VideoBackground = ({ children }) => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <video className="absolute top-0 left-0 w-full h-full object-cover" src={videoBg} autoPlay loop muted playsInline />
//       <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default VideoBackground;


import React, { useEffect, useRef } from 'react';
import { videoBg } from '../assets/images'; // Ensure this path is correct

const VideoBackground = ({ children }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const playVideoWithSound = async () => {
      try {
        await videoElement.play();
        videoElement.loop = true; // Ensure looping
      } catch (error) {
        console.log("Autoplay with sound was blocked by the browser.");
      }
    };

    if (videoElement) {
      playVideoWithSound();
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        playsInline
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
