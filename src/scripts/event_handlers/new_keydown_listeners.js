// import { wallUtil } from "../Utils/wallUtil";

// export const handleKeydown = (player, level, pauseStatus) => {
//   document.addEventListener("keydown", (event) => {
//     switch(pauseStatus) {
//       case true:
//         return;
//       case false:
//         event.stopPropagation();
//         event.preventDefault();

//         const key = event.keyCode;
//         if (key === 65) {
//           player.velocityX -= 0.5;
//         } else if (key === 68) {
//           player.velocityX += 0.5;
//         } else if (key === 32) {
//           player.velocityY -= 20;
//         }

        
//       default:
//         return;
//     }
//   })
// }