// // // import { videoBg } from '../assets/images'; 

// // // const VideoBackground = ({ children }) => {
// // //   return (
// // //     <div className="relative w-full h-screen overflow-hidden ">
// // //       <video className="absolute top-0 left-0 w-full h-full object-cover" src={videoBg} autoPlay loop muted playsInline />
// // //       <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
// // //         {children}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default VideoBackground;


// // // import React from 'react';
// // // import { videoBg } from '../assets/images'; // Ensure this path is correct

// // // const VideoBackground = ({ children }) => {
// // //   return (
// // //     <div className="relative w-full h-screen overflow-hidden">
// // //       <video className="absolute top-0 left-0 w-full h-full object-cover" src={videoBg} autoPlay loop muted playsInline />
// // //       <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
// // //         {children}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default VideoBackground;


// // import React, { useEffect, useRef } from 'react';
// // import { videoBg } from '../assets/images'; // Ensure this path is correct

// // const VideoBackground = ({ children }) => {
// //   const videoRef = useRef(null);

// //   useEffect(() => {
// //     const videoElement = videoRef.current;

// //     const playVideoWithSound = async () => {
// //       try {
// //         await videoElement.play();
// //         videoElement.loop = true; // Ensure looping
// //       } catch (error) {
// //         console.log("Autoplay with sound was blocked by the browser.");
// //       }
// //     };

// //     if (videoElement) {
// //       playVideoWithSound();
// //     }
// //   }, []);

// //   return (
// //     <div className="relative w-full h-screen overflow-hidden">
// //       <video
// //         ref={videoRef}
// //         className="absolute top-0 left-0 w-full h-full object-cover"
// //         src={videoBg}
// //         autoPlay
// //         playsInline
// //       />
// //       <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
// //         {children}
// //       </div>
// //     </div>
// //   );
// // };

// // export default VideoBackground;


// import React, { useEffect, useRef, useState } from 'react';
// import { videoBg } from '../assets/images'; // Ensure this path is correct

// const VideoBackground = ({ children }) => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     const videoElement = videoRef.current;

//     const attemptPlay = async () => {
//       try {
//         await videoElement.play();
//         setIsPlaying(true); // If playback succeeds
//       } catch (error) {
//         setIsPlaying(false); // If autoplay with sound is blocked
//         console.log("Autoplay with sound was blocked by the browser.");
//       }
//     };

//     if (videoElement) {
//       attemptPlay();
//     }
//   }, []);

//   const handlePlayClick = () => {
//     const videoElement = videoRef.current;
//     videoElement.play();
//     setIsPlaying(true);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <video
//         ref={videoRef}
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src={videoBg}
//         autoPlay
//         loop
//         playsInline
//       />
//       {!isPlaying && (
//         <button
//           onClick={handlePlayClick}
//           className="absolute inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50 text-white font-bold text-xl p-4 rounded"
//         >
//           Click to Play with Sound
//         </button>
//       )}
//       <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default VideoBackground;


import React, { useEffect, useRef, useState } from 'react';
import { videoBg } from '../assets/images'; // Ensure this path is correct
import { FaPlay } from 'react-icons/fa'; // Import play icon from react-icons

const VideoBackground = ({ children }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const attemptPlay = async () => {
      try {
        await videoElement.play();
        setIsPlaying(true); // If playback succeeds
      } catch (error) {
        setIsPlaying(false); // If autoplay with sound is blocked
        console.log("Autoplay with sound was blocked by the browser.");
      }
    };

    if (videoElement) {
      attemptPlay();
    }
  }, []);

  const handlePlayClick = () => {
    const videoElement = videoRef.current;
    videoElement.play();
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        playsInline
      />
      {!isPlaying && (
        <button
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50 rounded-full p-4 transition-transform transform hover:scale-110"
        >
          <FaPlay className="text-red-600 text-4xl" /> {/* Red play icon */}
        </button>
      )}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
