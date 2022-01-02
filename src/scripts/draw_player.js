export const drawPlayer = (
  ctx, image, x, y, velocityX, velocityY, left, right, jumping, impulsing, count
) => {

  switch (true) {
    case velocityX >= 1.0 || right:
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
    case Math.abs(velocityX) < 1.0:
      ctx.drawImage(image, 660, 0, 55, 80, x, y, 45, 70); // standing
      break;

  }

  if (velocityX > 0.5) {
    
  }

  

  
}