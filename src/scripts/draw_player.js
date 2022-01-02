export const drawPlayer = (
  ctx, image, reverseImage, x, y, velocityX, velocityY, left, right, jumping, impulsing, count
) => {

  switch (true) {
    case (velocityX >= 1.0 && !jumping) || (right && !jumping):
      if (count <= 5) {
        ctx.drawImage(image, 0, 0, 65, 80, x, y, 45, 70);
      } else if (count <= 10) {
        ctx.drawImage(image, 75, 0, 65, 80, x, y, 45, 70);
      } else if (count <= 15) {
        ctx.drawImage(image, 150, 0, 65, 80, x, y, 45, 70);
      } else if (count <= 20) {
        ctx.drawImage(image, 225, 0, 55, 80, x, y, 45, 70);
      } else {
        ctx.drawImage(image, 360, 0, 70, 80, x, y, 45, 70);
      }
      break;
    case (velocityX <= -1.0 && !jumping) || (left && !jumping):
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
    case velocityX < 1.0 && velocityX >= 0 && !jumping:
      ctx.drawImage(image, 660, 0, 55, 80, x, y, 45, 70); // standing facing right
      break;
    case velocityX > -1.0 && velocityX < 0 && !jumping:
      ctx.drawImage(reverseImage, 725, 0, 55, 80, x, y, 45, 70); // standing facing left
      break;
    case jumping && velocityX >= 0:
      ctx.drawImage(image, 865, 0, 75, 68, x, y, 55, 70); // jumping facing right
      break;
    case jumping && velocityX < 0:
      ctx.drawImage(reverseImage, 500, 0, 75, 68, x, y, 55, 70); // jumping facing left
      break;
    
  }


  

  
}