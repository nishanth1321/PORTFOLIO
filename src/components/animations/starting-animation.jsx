// import React from 'react';
// import AnimationImage from '../../assets/Startinganimation.png';

// const StartingAnimation = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-white">
//       {/* Define keyframe animation directly within the component */}
//       <style>
//         {`
//           @keyframes moveImage {
//             0% {
//               transform: translate(0, 100%); /* Start at bottom-left */
//             }
//             50% {
//               transform: translate(50vw, 50vh) translate(-50%, -50%); /* Pause at the center */
//             }
//             100% {
//               transform: translate(100vw, -100%); /* End at top-right */
//             }
//           }

//           .animate-move-image {
//             animation: moveImage 3s ease-in-out forwards;
//           }
//         `}
//       </style>

//       {/* Image with the animation */}
//       <div className="max-w-[80%] max-h-[80%] animate-move-image">
//         <img 
//           src={AnimationImage}
//           alt="Starting Animation"
//           className="object-contain h-[60%] w-[50%]"
//         />
//       </div>
//     </div>
//   );
// };

// export default StartingAnimation;
import React from 'react';
import AnimationImage from '../../assets/Startinganimation.png';

const StartingAnimation = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden bg-white">
      {/* Define keyframe animation directly within the component */}
      <style>
        {`
          @keyframes moveImage {
            0% {
              transform: translate(0, 100%); /* Start at bottom-left */
            }
            60% {
              transform: translate(50vw, 50vh) translate(-40%, -50%); /* Pause at the center */
            }
            100% {
              transform: translate(100vw, -100%); /* End at top-right */
            }
          }

          .animate-move-image {
            animation: moveImage 3s ease-in-out forwards;
          }
        `}
      </style>

      {/* Image with the animation */}
      <div className="max-w-[80%] max-h-[80%] animate-move-image">
        <img 
          src={AnimationImage}
          alt="Starting Animation"
          className="object-contain h-[50%] w-[45%]"
        />
      </div>
    </div>
  );
};

export default StartingAnimation;
