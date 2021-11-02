export const Util = {
  collisionDetection(player, arrWalls) {
    // debugger
    for (let i = 0; i < arrWalls.length; i++) {
      let wall = arrWalls[i];
      
      if (wall.x < player.x + player.width && // collisionRight
          wall.x + wall.width > player.x && // collisionLeft
          wall.y < player.y + player.height && // collisionBottom
          wall.y + wall.height > player.y) { // collisionTop
            return true;
          }
    }
    
    return false;
  }
}
