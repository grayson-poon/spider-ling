import { wallUtil } from "./wallUtil"

export const adjustPlayerGoingLeft = (player, arrWalls) => {
  let closestL = wallUtil.closestWallToTheLeft(player, arrWalls);
  let distanceL = wallUtil.distanceToTheLeft(player, closestL);

  if (distanceL === 0) {
    return;
  } else if (distanceL > player.velocity - 0.5) {
    player.velocityX -= 0.5;
  } else {
    player.x += (distanceL);
  }
}