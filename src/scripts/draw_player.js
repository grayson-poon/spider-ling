export const drawPlayer = (
  player, ctx, image, reverseImage, x, y, velocityX, velocityY, left, right, jumping, impulsing, count
) => {

  switch (true) {
    case (velocityX >= 1.0 && !jumping) || (right && !jumping): // running right
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
    case (velocityX <= -1.0 && !jumping) || (left && !jumping): // running left
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
    case velocityX < 1.0 && velocityX >= 0 && !jumping && Math.abs(velocityY) === 0:
      ctx.drawImage(image, 667, 0, 35, 80, x, y, 30, 70); // standing facing right
      break;
    case velocityX > -1.0 && velocityX < 0 && !jumping && Math.abs(velocityY) === 0:
      ctx.drawImage(reverseImage, 740, 0, 35, 80, x, y, 30, 70); // standing facing left
      break;
    case (jumping && velocityX >= 0) || (!jumping && velocityY > 0 && velocityX >= 0):
      ctx.drawImage(image, 865, 0, 63, 68, x - 23, y, 55, 70); // jumping facing right
      break;
    case Math.abs(velocityY) > 0 && velocityX < 0:
      ctx.drawImage(reverseImage, 500, 0, 75, 68, x, y, 55, 70); // jumping facing left
      break;
    
  }


  

  
}