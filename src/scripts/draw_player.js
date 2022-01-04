import { vecUtil } from "./util/vecUtil";

export const drawPlayer = (
  player, ctx, image, reverseImage, x, y, velocityX, velocityY, unitVec, left, right, jumping, impulsing, count
) => {
  switch (true) {
    // running right
    case (velocityX >= 0.5 && !jumping && velocityY === 0) || (right && !jumping && velocityY === 0):
      if (count <= 5) {
        ctx.drawImage(image, 0, 0, 65, 80, x - 15, y, 45, 70);
      } else if (count <= 10) {
        ctx.drawImage(image, 75, 0, 65, 80, x - 15, y, 45, 70);
      } else if (count <= 15) {
        ctx.drawImage(image, 150, 0, 65, 80, x - 15, y, 45, 70);
      } else if (count <= 20) {
        ctx.drawImage(image, 225, 0, 55, 80, x - 15, y, 45, 70);
      } else {
        ctx.drawImage(image, 360, 0, 70, 80, x - 15, y, 45, 70);
      }
      break;
    // running left
    case (velocityX <= -0.5 && !jumping && velocityY === 0) || (left && !jumping && velocityY === 0): 
      if (count <= 5) {
        ctx.drawImage(reverseImage, 1375, 0, 65, 80, x, y, 45, 70);
      } else if (count <= 10) {
        ctx.drawImage(reverseImage, 1300, 0, 65, 80, x, y, 45, 70);
      } else if (count <= 15) {
        ctx.drawImage(reverseImage, 1225, 0, 65, 80, x, y, 45, 70);
      } else if (count <= 20) {
        ctx.drawImage(reverseImage, 1160, 0, 55, 80, x, y, 45, 70);
      } else {
        ctx.drawImage(reverseImage, 1010, 0, 70, 80, x, y, 45, 70);
      }
      break;
    // standing facing right
    case velocityX < 0.5 && velocityX > 0 && !jumping && Math.abs(velocityY) === 0: 
      ctx.drawImage(image, 667, 0, 35, 76, x, y, 30, 70); 
      break;
     // standing facing left
    case velocityX > -0.5 && velocityX < 0 && !jumping && Math.abs(velocityY) === 0:
      ctx.drawImage(reverseImage, 740, 0, 35, 76, x, y, 30, 70); 
      break;
    // shooting web up and right
    case (jumping && velocityY < 0 && velocityX > 0 && vecUtil.angleOfVelocity(unitVec) <= 90 && vecUtil.angleOfVelocity(unitVec) >= 60):
      ctx.drawImage(image, 810, 0, 50, 80, x, y, 45, 70);
      break;
    // shooting web up and left
    case (jumping && velocityY < 0 && velocityX < 0 && vecUtil.angleOfVelocity(unitVec) >= 90 && vecUtil.angleOfVelocity(unitVec) <= 120):
      ctx.drawImage(reverseImage, 580, 0, 50, 80, x - 15, y, 45, 70);
      break;
    // jumping facing right
    case (jumping && velocityX > 0) || (!jumping && velocityY > 0 && velocityX > 0): 
      ctx.drawImage(image, 865, 0, 63, 68, x - 15, y, 45, 70); 
      break;
    // jumping facing left
    case (jumping && velocityX < 0) || (!jumping && velocityY > 0 && velocityX < 0): 
      ctx.drawImage(reverseImage, 512, 0, 63, 68, x, y, 45, 70); 
      break;
  }
}